/* بوّابة الحساب للعبة ريكسد — عبر Supabase Auth.
 *
 * لماذا بلا SDK؟ حزمة supabase-js تزيد ~120 كيلوبايت وتحتاج فتح CSP لنطاق
 * CDN جديد. الاتصال المباشر بواجهة Supabase يكفي تماماً ويُبقي
 * script-src 'self' كما هو، فلا يُحمَّل سطر جافاسكربت واحد من خارج موقعك.
 *
 * ═══ الأمان ═══
 * • كلمة المرور تُرسل مرّة واحدة عبر HTTPS إلى Supabase مباشرةً. لا يراها
 *   خادمنا ولا تُحفظ في المتصفّح. Supabase يهشّمها بـbcrypt ولا يعيدها أبداً.
 * • المفتاح أدناه هو anon public key — مصمَّم ليكون علنياً. وحده لا يمنح
 *   شيئاً: سياسات Row Level Security في القاعدة تمنع أي حساب من رؤية
 *   بيانات غيره، وتُطبَّق في الخادم فلا يمكن تخطّيها من المتصفّح.
 * • رمز الدخول قصير العمر ويُجدَّد تلقائياً برمز التجديد.
 */
(function () {
  'use strict';

  // ═══ يُملأ من: لوحة Supabase ← Settings ← API ═══
  var SUPABASE_URL = 'https://jrqskqkxdvwbqqctsxbn.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_m4YrpobBJpdZVgzEhyWbiA_hxNqka69';

  var LS = 'rexed_auth_v1';
  var state = { mode: 'login', email: '', session: null };

  function sb(path, opts) {
    opts = opts || {};
    var h = {
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json',
    };
    if (opts.auth && state.session) h['Authorization'] = 'Bearer ' + state.session.access_token;
    else h['Authorization'] = 'Bearer ' + SUPABASE_KEY;
    if (opts.headers) for (var k in opts.headers) h[k] = opts.headers[k];
    return fetch(SUPABASE_URL + path, {
      method: opts.method || 'GET',
      headers: h,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    }).then(function (r) {
      return r.text().then(function (t) {
        var j = {};
        try { j = t ? JSON.parse(t) : {}; } catch (e) { j = { raw: t }; }
        return { status: r.status, body: j };
      });
    });
  }

  function saveSession(s) {
    state.session = s;
    try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {}
  }
  function loadSession() {
    try { state.session = JSON.parse(localStorage.getItem(LS) || 'null'); } catch (e) {}
    return state.session;
  }
  function dropSession() {
    state.session = null;
    try { localStorage.removeItem(LS); } catch (e) {}
  }

  /** يجدّد رمز الدخول إن قارب الانتهاء. يرجع true إن صارت الجلسة صالحة. */
  function ensureFresh() {
    var s = state.session;
    if (!s || !s.refresh_token) return Promise.resolve(false);
    var expMs = (s.expires_at ? s.expires_at * 1000 : 0);
    if (expMs - Date.now() > 120000) return Promise.resolve(true);
    return sb('/auth/v1/token?grant_type=refresh_token', {
      method: 'POST', body: { refresh_token: s.refresh_token },
    }).then(function (r) {
      if (r.status === 200 && r.body.access_token) { saveSession(r.body); return true; }
      dropSession(); return false;
    }).catch(function () { return false; });
  }

  // ═══ رسائل الخطأ بالعربية ═══
  function errText(r) {
    var b = r.body || {};
    var msg = (b.msg || b.error_description || b.message || b.error || '').toLowerCase();
    if (r.status === 429 || msg.indexOf('rate') >= 0 || msg.indexOf('security purposes') >= 0)
      return 'محاولات كثيرة — انتظر دقيقة ثم أعد المحاولة';
    if (msg.indexOf('invalid login') >= 0 || msg.indexOf('invalid credentials') >= 0)
      return 'البريد أو كلمة المرور غير صحيحة';
    if (msg.indexOf('already registered') >= 0 || msg.indexOf('already been registered') >= 0)
      return 'هذا البريد مسجَّل — سجّل الدخول بدل إنشاء حساب';
    if (msg.indexOf('token has expired') >= 0 || msg.indexOf('expired') >= 0)
      return 'انتهت صلاحية الرمز — اطلب رمزاً جديداً';
    if (msg.indexOf('invalid token') >= 0 || msg.indexOf('otp') >= 0)
      return 'الرمز غير صحيح';
    if (msg.indexOf('not confirmed') >= 0)
      return 'فعّل بريدك أولاً بالرمز المُرسَل';
    if (msg.indexOf('password') >= 0 && msg.indexOf('least') >= 0)
      return 'كلمة المرور قصيرة جداً';
    if (msg.indexOf('email') >= 0 && msg.indexOf('invalid') >= 0)
      return 'صيغة البريد غير صحيحة';
    return 'حدث خطأ، حاول مرّة أخرى';
  }

  // ═══ بناء الطبقة ═══
  var root = document.createElement('div');
  root.id = 'auth-gate';
  root.innerHTML = [
    '<div class="ag-box">',
      '<div class="ag-logo">ريكسد</div>',
      '<div class="ag-sub" id="ag-sub">سجّل دخولك للّعب</div>',
      '<div class="ag-tabs" id="ag-tabs">',
        '<button type="button" class="ag-tab on" data-m="login">دخول</button>',
        '<button type="button" class="ag-tab" data-m="signup">حساب جديد</button>',
      '</div>',
      '<form id="ag-form" autocomplete="on" novalidate>',
        '<label class="ag-lab" for="ag-email">البريد الإلكتروني</label>',
        '<input id="ag-email" type="email" inputmode="email" dir="ltr"',
               ' autocomplete="email" required placeholder="you@gmail.com">',
        '<label class="ag-lab" for="ag-pass">كلمة المرور</label>',
        '<div class="ag-pwwrap">',
          '<input id="ag-pass" type="password" dir="ltr" required',
                 ' autocomplete="current-password" placeholder="••••••••">',
          '<button type="button" id="ag-eye" class="ag-eye" aria-label="إظهار كلمة المرور">👁</button>',
        '</div>',
        '<ul class="ag-rules" id="ag-rules" hidden>',
          '<li data-r="len">ثمانية أحرف على الأقل</li>',
          '<li data-r="letter">حرف واحد على الأقل</li>',
          '<li data-r="digit">رقم واحد على الأقل</li>',
          '<li data-r="symbol">رمز واحد مثل ! @ # $</li>',
        '</ul>',
        '<div class="ag-msg" id="ag-msg" role="alert"></div>',
        '<button type="submit" class="ag-go" id="ag-go">دخول</button>',
      '</form>',
      '<form id="ag-vform" hidden autocomplete="off" novalidate>',
        '<div class="ag-vhint">أرسلنا رمزاً من ستّة أرقام إلى<br><b id="ag-vmail" dir="ltr"></b></div>',
        '<div class="ag-code" id="ag-code" dir="ltr">',
          '<input inputmode="numeric" maxlength="1"><input inputmode="numeric" maxlength="1">',
          '<input inputmode="numeric" maxlength="1"><input inputmode="numeric" maxlength="1">',
          '<input inputmode="numeric" maxlength="1"><input inputmode="numeric" maxlength="1">',
        '</div>',
        '<div class="ag-msg" id="ag-vmsg" role="alert"></div>',
        '<button type="submit" class="ag-go" id="ag-vgo">تأكيد</button>',
        '<button type="button" class="ag-link" id="ag-resend">إعادة إرسال الرمز</button>',
        '<button type="button" class="ag-link" id="ag-back">رجوع</button>',
      '</form>',
    '</div>',
  ].join('');

  function $(id) { return root.querySelector('#' + id); }

  var RULES = {
    len: function (v) { return v.length >= 8; },
    letter: function (v) { return /[A-Za-z؀-ۿ]/.test(v); },
    digit: function (v) { return /[0-9]/.test(v); },
    symbol: function (v) { return /[^A-Za-z0-9؀-ۿ]/.test(v); },
  };
  function refreshRules() {
    var v = $('ag-pass').value, all = true;
    Array.prototype.forEach.call(root.querySelectorAll('#ag-rules li'), function (li) {
      var ok = RULES[li.getAttribute('data-r')](v);
      li.classList.toggle('ok', ok);
      if (!ok) all = false;
    });
    return all;
  }

  function say(el, text, kind) {
    el.textContent = text || '';
    el.className = 'ag-msg' + (text ? ' show ' + (kind || 'err') : '');
  }

  function setMode(m) {
    state.mode = m;
    Array.prototype.forEach.call(root.querySelectorAll('.ag-tab'), function (b) {
      b.classList.toggle('on', b.getAttribute('data-m') === m);
    });
    $('ag-rules').hidden = (m !== 'signup');
    $('ag-go').textContent = (m === 'signup') ? 'إنشاء الحساب' : 'دخول';
    $('ag-sub').textContent = (m === 'signup') ? 'أنشئ حسابك للّعب' : 'سجّل دخولك للّعب';
    $('ag-pass').setAttribute('autocomplete', m === 'signup' ? 'new-password' : 'current-password');
    say($('ag-msg'), '');
    if (m === 'signup') refreshRules();
  }

  function showVerify(email) {
    state.email = email;
    $('ag-vmail').textContent = email;
    $('ag-form').hidden = true; $('ag-tabs').hidden = true; $('ag-vform').hidden = false;
    $('ag-sub').textContent = 'تفعيل الحساب';
    var boxes = root.querySelectorAll('#ag-code input');
    Array.prototype.forEach.call(boxes, function (b) { b.value = ''; });
    boxes[0].focus();
  }
  function showAuth() {
    $('ag-vform').hidden = true; $('ag-tabs').hidden = false; $('ag-form').hidden = false;
    setMode(state.mode);
  }
  function codeValue() {
    return Array.prototype.map.call(root.querySelectorAll('#ag-code input'),
      function (b) { return b.value; }).join('');
  }

  // ═══ العمليات ═══
  function doSignup(email, password) {
    return sb('/auth/v1/signup', { method: 'POST', body: { email: email, password: password } })
      .then(function (r) {
        if (r.status >= 400) return { err: errText(r) };
        // البريد يحتاج تفعيلاً ⇒ لا جلسة بعد. Supabase أرسل الرمز.
        if (r.body.access_token) { saveSession(r.body); return { done: true }; }
        return { verify: true };
      });
  }

  function doLogin(email, password) {
    return sb('/auth/v1/token?grant_type=password',
      { method: 'POST', body: { email: email, password: password } })
      .then(function (r) {
        if (r.status >= 400) {
          var m = ((r.body.msg || r.body.error_description || '') + '').toLowerCase();
          if (m.indexOf('not confirmed') >= 0) return { verify: true };
          return { err: errText(r) };
        }
        saveSession(r.body);
        return { done: true };
      });
  }

  function doVerify(email, code) {
    return sb('/auth/v1/verify', {
      method: 'POST', body: { type: 'signup', email: email, token: code },
    }).then(function (r) {
      if (r.status >= 400 || !r.body.access_token) {
        // بعض الحالات يكون النوع magiclink بدل signup
        return sb('/auth/v1/verify', {
          method: 'POST', body: { type: 'email', email: email, token: code },
        }).then(function (r2) {
          if (r2.status >= 400 || !r2.body.access_token) return { err: errText(r2) };
          saveSession(r2.body); return { done: true };
        });
      }
      saveSession(r.body); return { done: true };
    });
  }

  function doResend(email) {
    return sb('/auth/v1/resend', {
      method: 'POST', body: { type: 'signup', email: email },
    });
  }

  // ═══ الأحداث ═══
  function wire() {
    Array.prototype.forEach.call(root.querySelectorAll('.ag-tab'), function (b) {
      b.addEventListener('click', function () { setMode(b.getAttribute('data-m')); });
    });
    $('ag-eye').addEventListener('click', function () {
      var p = $('ag-pass'); p.type = (p.type === 'password') ? 'text' : 'password';
    });
    $('ag-pass').addEventListener('input', function () {
      if (state.mode === 'signup') refreshRules();
    });

    $('ag-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = $('ag-email').value.trim().toLowerCase();
      var pass = $('ag-pass').value;
      var btn = $('ag-go');
      var label = (state.mode === 'signup') ? 'إنشاء الحساب' : 'دخول';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        say($('ag-msg'), 'صيغة البريد غير صحيحة'); return;
      }
      if (state.mode === 'signup' && !refreshRules()) {
        say($('ag-msg'), 'أكمل شروط كلمة المرور أولاً'); return;
      }
      btn.disabled = true; btn.textContent = '...';
      (state.mode === 'signup' ? doSignup(email, pass) : doLogin(email, pass))
        .then(function (res) {
          btn.disabled = false; btn.textContent = label;
          if (res.done) { unlock(); return; }
          if (res.verify) { showVerify(email); return; }
          say($('ag-msg'), res.err);
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = label;
          say($('ag-msg'), 'تعذّر الاتصال — تحقّق من الشبكة');
        });
    });

    var boxes = Array.prototype.slice.call(root.querySelectorAll('#ag-code input'));
    boxes.forEach(function (b, i) {
      b.addEventListener('input', function () {
        b.value = b.value.replace(/\D/g, '').slice(0, 1);
        if (b.value && i < boxes.length - 1) boxes[i + 1].focus();
        if (codeValue().length === 6) $('ag-vform').requestSubmit();
      });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !b.value && i > 0) boxes[i - 1].focus();
      });
      b.addEventListener('paste', function (e) {
        var t = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
        if (!t) return;
        e.preventDefault();
        for (var k = 0; k < 6; k++) boxes[k].value = t[k] || '';
        boxes[Math.min(t.length, 5)].focus();
        if (t.length >= 6) $('ag-vform').requestSubmit();
      });
    });

    $('ag-vform').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = codeValue();
      if (code.length !== 6) { say($('ag-vmsg'), 'أدخل الأرقام الستّة'); return; }
      var btn = $('ag-vgo');
      btn.disabled = true; btn.textContent = '...';
      doVerify(state.email, code).then(function (res) {
        btn.disabled = false; btn.textContent = 'تأكيد';
        if (res.done) { unlock(); return; }
        say($('ag-vmsg'), res.err);
        boxes.forEach(function (b) { b.value = ''; });
        boxes[0].focus();
      }).catch(function () {
        btn.disabled = false; btn.textContent = 'تأكيد';
        say($('ag-vmsg'), 'تعذّر الاتصال — تحقّق من الشبكة');
      });
    });

    $('ag-resend').addEventListener('click', function () {
      var b = $('ag-resend');
      b.disabled = true;
      doResend(state.email).then(function (r) {
        var ok = r.status < 400;
        say($('ag-vmsg'), ok ? 'أُرسل رمز جديد' : errText(r), ok ? 'ok' : 'err');
        var left = 60;
        var tick = function () {
          b.textContent = left > 0 ? 'إعادة الإرسال (' + left + ')' : 'إعادة إرسال الرمز';
        };
        tick();
        var t = setInterval(function () {
          left--; tick();
          if (left <= 0) { clearInterval(t); b.disabled = false; }
        }, 1000);
      }).catch(function () {
        b.disabled = false;
        say($('ag-vmsg'), 'تعذّر الاتصال');
      });
    });

    $('ag-back').addEventListener('click', showAuth);
  }

  // ═══ فتح اللعبة ═══
  function unlock() {
    root.classList.add('gone');
    setTimeout(function () { if (root.parentNode) root.remove(); }, 380);
    document.documentElement.classList.remove('auth-locked');
    if (window.__rxOnAuth) window.__rxOnAuth();
  }

  // ═══ واجهة التقدّم — تستعملها اللعبة ═══
  window.__rxAuth = {
    userId: function () {
      var s = state.session;
      return (s && s.user && s.user.id) || null;
    },
    email: function () {
      var s = state.session;
      return (s && s.user && s.user.email) || null;
    },
    /** يجلب تقدّم الحساب كاملاً: { catId: {d:[[..]], p:[..]} } */
    loadProgress: function () {
      return ensureFresh().then(function (ok) {
        if (!ok) return {};
        return sb('/rest/v1/progress?select=cat_id,decks,pos', { auth: true })
          .then(function (r) {
            var out = {};
            if (r.status >= 400 || !Array.isArray(r.body)) return out;
            r.body.forEach(function (row) { out[row.cat_id] = { d: row.decks, p: row.pos }; });
            return out;
          });
      }).catch(function () { return {}; });
    },
    /** يحفظ تقدّم فئة واحدة (upsert). */
    saveProgress: function (catId, decks, pos) {
      var uid = this.userId();
      if (!uid) return Promise.resolve(false);
      return ensureFresh().then(function (ok) {
        if (!ok) return false;
        return sb('/rest/v1/progress?on_conflict=user_id,cat_id', {
          method: 'POST', auth: true,
          headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
          body: [{ user_id: uid, cat_id: catId, decks: decks, pos: pos }],
        }).then(function (r) { return r.status < 400; });
      }).catch(function () { return false; });
    },
    logout: function () {
      return sb('/auth/v1/logout', { method: 'POST', auth: true })
        .catch(function () {})
        .then(function () { dropSession(); location.reload(); });
    },
  };

  // ═══ الإقلاع ═══
  document.documentElement.classList.add('auth-locked');
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(root);
    wire();
    setMode('login');
    if (loadSession()) {
      ensureFresh().then(function (ok) {
        if (ok) unlock();
        else { dropSession(); }
      });
    }
  });
})();
