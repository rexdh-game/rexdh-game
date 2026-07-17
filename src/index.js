const QUESTIONS = [
  // علوم
  { q: "ما هو الكوكب الأحمر في المجموعة الشمسية؟", opts: ["الزهرة","المريخ","المشتري","زحل"], a: 1, cat: "علوم" },
  { q: "ما هو العنصر الكيميائي الذي رمزه O؟", opts: ["ذهب","أوكسجين","أوزون","أوسميوم"], a: 1, cat: "علوم" },
  { q: "كم تبلغ سرعة الضوء تقريبًا؟", opts: ["300 ألف كم/ث","150 ألف كم/ث","500 ألف كم/ث","100 ألف كم/ث"], a: 0, cat: "علوم" },
  { q: "ما هو أصغر كوكب في المجموعة الشمسية؟", opts: ["الأرض","المريخ","عطارد","بلوتو"], a: 2, cat: "علوم" },
  { q: "من وضع نظرية النسبية؟", opts: ["نيوتن","أينشتاين","هوكينج","غاليليو"], a: 1, cat: "علوم" },
  { q: "ما المادة الأساسية في خلية الدم الحمراء؟", opts: ["هيموغلوبين","كولاجين","كيراتين","ميلانين"], a: 0, cat: "علوم" },
  { q: "ما هو رمز الذهب في الجدول الدوري؟", opts: ["Go","Gd","Au","Ag"], a: 2, cat: "علوم" },
  { q: "كم عدد الكواكب في المجموعة الشمسية؟", opts: ["7","8","9","10"], a: 1, cat: "علوم" },
  { q: "من اكتشف الجاذبية؟", opts: ["أينشتاين","داروين","نيوتن","فاراداي"], a: 2, cat: "علوم" },
  { q: "ما الغاز الأكثر وفرة في الغلاف الجوي؟", opts: ["الأوكسجين","الهيدروجين","النيتروجين","ثاني أكسيد الكربون"], a: 2, cat: "علوم" },
  { q: "ما وحدة قياس الكهرباء؟", opts: ["واط","أمبير","فولت","أوم"], a: 1, cat: "علوم" },
  { q: "كم عدد عظام جسم الإنسان البالغ؟", opts: ["186","206","226","246"], a: 1, cat: "علوم" },
  // جغرافيا
  { q: "ما هي عاصمة المملكة العربية السعودية؟", opts: ["جدة","مكة","الرياض","المدينة"], a: 2, cat: "جغرافيا" },
  { q: "ما هو أطول نهر في العالم؟", opts: ["الأمازون","النيل","الفولغا","المسيسيبي"], a: 1, cat: "جغرافيا" },
  { q: "ما هي أكبر دولة في العالم مساحةً؟", opts: ["الصين","كندا","أمريكا","روسيا"], a: 3, cat: "جغرافيا" },
  { q: "ما عاصمة فرنسا؟", opts: ["لندن","مدريد","باريس","برلين"], a: 2, cat: "جغرافيا" },
  { q: "ما هو المحيط الأكبر في العالم؟", opts: ["الأطلسي","الهندي","الهادئ","المتجمد"], a: 2, cat: "جغرافيا" },
  { q: "ما هي أعلى قمة جبلية في العالم؟", opts: ["كيليمنجارو","إيفرست","ماكنلي","كي2"], a: 1, cat: "جغرافيا" },
  { q: "ما عاصمة اليابان؟", opts: ["أوساكا","كيوتو","طوكيو","هيروشيما"], a: 2, cat: "جغرافيا" },
  { q: "ما هو أصغر دولة في العالم؟", opts: ["موناكو","الفاتيكان","سان مارينو","ليختنشتاين"], a: 1, cat: "جغرافيا" },
  { q: "ما عاصمة البرازيل؟", opts: ["ريو دي جانيرو","ساو باولو","برازيليا","سلفادور"], a: 2, cat: "جغرافيا" },
  { q: "في أي قارة تقع نيجيريا؟", opts: ["آسيا","أوروبا","أفريقيا","أمريكا"], a: 2, cat: "جغرافيا" },
  { q: "ما عاصمة الإمارات العربية المتحدة؟", opts: ["دبي","الشارقة","أبوظبي","العين"], a: 2, cat: "جغرافيا" },
  // تاريخ
  { q: "في أي عام فُتحت القسطنطينية على يد العثمانيين؟", opts: ["1453","1492","1517","1389"], a: 0, cat: "تاريخ" },
  { q: "في أي عام انتهت الحرب العالمية الثانية؟", opts: ["1943","1944","1945","1946"], a: 2, cat: "تاريخ" },
  { q: "من هو أول رئيس للولايات المتحدة؟", opts: ["أبراهام لنكولن","جورج واشنطن","توماس جيفرسون","جون آدامز"], a: 1, cat: "تاريخ" },
  { q: "في أي عام بدأت الحرب العالمية الأولى؟", opts: ["1912","1914","1916","1918"], a: 1, cat: "تاريخ" },
  { q: "متى قامت الثورة الفرنسية؟", opts: ["1776","1789","1799","1815"], a: 1, cat: "تاريخ" },
  { q: "من اخترع الطباعة؟", opts: ["غوتنبرغ","نيوتن","داروين","واط"], a: 0, cat: "تاريخ" },
  { q: "أول امرأة تفوز بجائزة نوبل؟", opts: ["إيدث ويارتون","ماري كوري","أنا فرانك","فلورنس نايتنغيل"], a: 1, cat: "تاريخ" },
  { q: "في أي عام هبط أول إنسان على القمر؟", opts: ["1965","1967","1969","1971"], a: 2, cat: "تاريخ" },
  { q: "الحضارة القديمة التي بنت الأهرام؟", opts: ["الرومانية","الإغريقية","المصرية","الفارسية"], a: 2, cat: "تاريخ" },
  { q: "من هو الإسكندر الأكبر؟", opts: ["ملك روماني","فيلسوف يوناني","قائد مقدوني","خليفة عباسي"], a: 2, cat: "تاريخ" },
  { q: "في أي عام اكتشف كولومبوس أمريكا؟", opts: ["1488","1490","1492","1498"], a: 2, cat: "تاريخ" },
  // قرآن وإسلام
  { q: "ما هي أطول سورة في القرآن الكريم؟", opts: ["آل عمران","النساء","البقرة","المائدة"], a: 2, cat: "قرآن" },
  { q: "كم عدد سور القرآن الكريم؟", opts: ["110","114","120","100"], a: 1, cat: "قرآن" },
  { q: "في أي شهر نزل القرآن الكريم؟", opts: ["رجب","شعبان","رمضان","ذو الحجة"], a: 2, cat: "قرآن" },
  { q: "كم عدد أركان الإسلام؟", opts: ["4","5","6","7"], a: 1, cat: "قرآن" },
  { q: "ما هي القبلة الأولى للمسلمين؟", opts: ["مكة المكرمة","المدينة المنورة","القدس","بيت المقدس"], a: 2, cat: "قرآن" },
  { q: "كم عدد الأنبياء المذكورين في القرآن؟", opts: ["20","25","30","35"], a: 1, cat: "قرآن" },
  { q: "ما اسم والدة النبي محمد ﷺ؟", opts: ["خديجة","آمنة","فاطمة","مريم"], a: 1, cat: "قرآن" },
  { q: "في أي مدينة وُلد النبي محمد ﷺ؟", opts: ["المدينة","الطائف","القدس","مكة"], a: 3, cat: "قرآن" },
  { q: "ما الركن الأول من أركان الإسلام؟", opts: ["الصلاة","الزكاة","الشهادتان","الصوم"], a: 2, cat: "قرآن" },
  { q: "ما هي أقصر سورة في القرآن الكريم؟", opts: ["الإخلاص","الفلق","الناس","الكوثر"], a: 3, cat: "قرآن" },
  { q: "كم عدد أجزاء القرآن الكريم؟", opts: ["20","25","30","40"], a: 2, cat: "قرآن" },
];

const HTML = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سين جيم - لعبة الفرق</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;background:#0f172a;color:#f1f5f9;min-height:100vh}
.screen{display:none;min-height:100vh}
.screen.active{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem}
.logo{font-size:3.5rem;text-align:center;margin-bottom:.5rem}
h1{font-size:2.2rem;font-weight:800;color:#f59e0b;text-align:center;margin-bottom:.25rem}
.subtitle{color:#64748b;text-align:center;margin-bottom:2rem}
.card{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:1.5rem;width:100%;max-width:420px;margin-bottom:1rem}
.card h2{font-size:1rem;color:#94a3b8;margin-bottom:1rem}
.inp{width:100%;background:#0f172a;border:1px solid #475569;border-radius:8px;padding:12px 14px;color:#f1f5f9;font-size:1rem;font-family:inherit;direction:rtl}
.inp:focus{outline:none;border-color:#f59e0b}
.code-inp{font-size:1.6rem;text-align:center;letter-spacing:.3em;font-weight:700}
.btn{display:block;width:100%;padding:13px;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;border:none;transition:all .15s;margin-top:10px}
.btn-gold{background:#f59e0b;color:#0f172a}.btn-gold:hover{background:#d97706}
.btn-dark{background:#1e293b;border:1px solid #475569;color:#f1f5f9}.btn-dark:hover{background:#334155}
.btn:disabled{opacity:.35;cursor:not-allowed}
.sep{text-align:center;color:#334155;margin:.5rem 0;font-size:.9rem}
#lobby-screen{min-height:100vh;padding:1.25rem;display:none;flex-direction:column;align-items:center}
#lobby-screen.active{display:flex}
.lob-head{width:100%;max-width:720px;display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:.5rem}
.code-badge{background:#1e293b;border:1px solid #334155;border-radius:10px;padding:8px 16px;cursor:pointer}
.code-badge small{color:#64748b;font-size:.75rem;display:block}
.code-badge strong{color:#f59e0b;font-size:1.3rem;letter-spacing:.2em}
.teams-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;width:100%;max-width:720px;margin-bottom:1rem}
.team-card{background:#1e293b;border:2px solid #334155;border-radius:16px;padding:1.25rem}
.t1{border-top:3px solid #3b82f6}.t2{border-top:3px solid #ef4444}
.team-head{font-size:1.1rem;font-weight:700;margin-bottom:.75rem}
.t1 .team-head{color:#60a5fa}.t2 .team-head{color:#f87171}
.plist{min-height:50px}
.pitem{background:#0f172a;border-radius:6px;padding:6px 10px;margin-bottom:5px;font-size:.88rem;display:flex;align-items:center;gap:7px}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.t1 .dot{background:#3b82f6}.t2 .dot{background:#ef4444}
.you{font-size:.7rem;background:#1e293b;border-radius:4px;padding:1px 5px;color:#64748b;margin-right:auto}
.join-team-btn{width:100%;margin-top:.75rem;padding:10px;border-radius:8px;border:none;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.t1 .join-team-btn{background:#1d4ed8;color:#fff}.t1 .join-team-btn:hover{background:#1e40af}
.t2 .join-team-btn{background:#b91c1c;color:#fff}.t2 .join-team-btn:hover{background:#991b1b}
.lob-ctrl{width:100%;max-width:720px;background:#1e293b;border-radius:16px;padding:1.25rem}
.fmt-label{font-size:.85rem;color:#94a3b8;margin-bottom:.6rem}
.fmt-row{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:1rem}
.fmt-btn{padding:6px 14px;border-radius:20px;border:1px solid #475569;background:transparent;color:#94a3b8;cursor:pointer;font-family:inherit;font-size:.88rem;transition:all .15s}
.fmt-btn.on{background:#f59e0b;border-color:#f59e0b;color:#0f172a;font-weight:700}
.start-btn{width:100%;padding:14px;background:#22c55e;border:none;border-radius:10px;color:#fff;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:inherit}
.start-btn:hover{background:#16a34a}
.start-btn:disabled{background:#1e293b;color:#475569;cursor:not-allowed}
.wait-txt{text-align:center;color:#475569;font-size:.88rem;padding:.5rem}
.split-bar{display:flex;align-items:center;gap:10px;margin-bottom:1rem;cursor:pointer;user-select:none}
.split-bar-line{flex:1;height:1px;background:#334155}
.split-bar-lbl{color:#94a3b8;font-size:.85rem;white-space:nowrap;display:flex;align-items:center;gap:5px}
.split-bar-lbl span{color:#f59e0b}
.split-panel{background:#0f172a;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid #334155}
.split-avatars{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:1rem;min-height:48px;align-items:center}
.av{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;border:2px solid #334155;flex-shrink:0;transition:all .2s}
.av.selected{border-color:#f59e0b;transform:scale(1.1)}
.count-row{display:flex;align-items:center;gap:10px;margin-bottom:1rem}
.count-lbl{color:#94a3b8;font-size:.9rem;flex:1;text-align:center}
.count-val{font-size:1.4rem;font-weight:700;color:#f1f5f9;min-width:32px;text-align:center}
.cnt-btn{width:38px;height:38px;border-radius:50%;border:none;font-size:1.3rem;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;transition:all .15s}
.cnt-add{background:#f1f5f9;color:#0f172a}.cnt-add:hover{background:#e2e8f0}
.cnt-sub{background:#334155;color:#94a3b8}.cnt-sub:hover{background:#475569}
.names-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem}
.name-inp{background:#1e293b;border:1px solid #334155;border-radius:8px;padding:10px 12px;color:#f1f5f9;font-size:.95rem;font-family:inherit;direction:rtl;width:100%}
.name-inp:focus{outline:none;border-color:#f59e0b}
.split-go-btn{width:100%;padding:13px;background:linear-gradient(135deg,#22c55e,#16a34a);border:none;border-radius:10px;color:#fff;font-size:1.05rem;font-weight:800;cursor:pointer;font-family:inherit}
.split-result{display:none;margin-top:1rem}
.split-result.show{display:block}
.split-teams{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:.75rem}
.split-team-box{border-radius:10px;padding:.9rem;text-align:center}
.split-t1{background:#1e3a5f;border:1px solid #3b82f6}
.split-t2{background:#450a0a;border:1px solid #ef4444}
.split-team-name{font-size:.82rem;font-weight:700;margin-bottom:.5rem}
.split-t1 .split-team-name{color:#60a5fa}
.split-t2 .split-team-name{color:#f87171}
.split-player{font-size:.88rem;color:#e2e8f0;padding:3px 0}
.apply-split-btn{width:100%;padding:11px;background:#f59e0b;border:none;border-radius:8px;color:#0f172a;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.apply-split-btn:hover{background:#d97706}
.rand-btn{width:100%;padding:11px;background:transparent;border:1px dashed #475569;border-radius:8px;color:#94a3b8;font-size:.88rem;cursor:pointer;font-family:inherit;margin-top:.5rem}
.rand-btn:hover{border-color:#f59e0b;color:#f59e0b}
#game-screen{background:#0f172a;min-height:100vh;padding:0;display:none;flex-direction:column}
#game-screen.active{display:flex}
.g-header{background:#1e293b;border-bottom:1px solid #334155;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between}
.tscore{text-align:center}
.tscore .tname{font-size:.8rem;color:#94a3b8}
.tscore .tpts{font-size:2.2rem;font-weight:800}
.ts1 .tpts{color:#60a5fa}.ts2 .tpts{color:#f87171}
.qprog{text-align:center}
.qprog .qnum{font-size:1rem;font-weight:700;color:#f1f5f9}
.qprog .qlabel{font-size:.75rem;color:#475569}
.g-body{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem}
.cat-pill{background:#1e293b;border-radius:20px;padding:4px 16px;font-size:.82rem;color:#f59e0b;margin-bottom:1rem;border:1px solid #334155}
.q-box{background:#1e293b;border:1px solid #334155;border-radius:20px;padding:1.75rem 2rem;max-width:640px;width:100%;text-align:center;margin-bottom:1.5rem}
.q-box .qn{font-size:.78rem;color:#475569;margin-bottom:.4rem}
.q-box .qt{font-size:1.3rem;font-weight:600;line-height:1.6;color:#f1f5f9}
.opts{display:grid;grid-template-columns:1fr 1fr;gap:9px;max-width:640px;width:100%;margin-bottom:1.25rem}
.opt{padding:14px 16px;background:#1e293b;border:1px solid #334155;border-radius:12px;cursor:pointer;font-size:1rem;font-family:inherit;color:#f1f5f9;transition:all .15s;text-align:right;direction:rtl}
.opt:hover:not(:disabled){border-color:#f59e0b;background:#263347}
.opt.ok{background:#14532d;border-color:#22c55e;color:#86efac}
.opt.no{background:#450a0a;border-color:#ef4444;color:#fca5a5}
.opt:disabled{cursor:default}
.buzz-area{display:flex;flex-direction:column;align-items:center;gap:14px}
.buzz-btn{width:155px;height:155px;border-radius:50%;border:none;background:#f59e0b;color:#0f172a;font-size:1.3rem;font-weight:800;cursor:pointer;font-family:inherit;transition:all .12s;box-shadow:0 0 0 10px rgba(245,158,11,.15),0 0 0 20px rgba(245,158,11,.07)}
.buzz-btn:hover{transform:scale(1.06)}
.buzz-btn:active{transform:scale(.94)}
.buzz-btn:disabled{background:#374151;color:#6b7280;box-shadow:none;cursor:not-allowed}
.buzzed-box{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:12px 24px;text-align:center}
.buzzed-box .bwho{font-size:1.05rem;font-weight:700}
.bwho.t1c{color:#60a5fa}.bwho.t2c{color:#f87171}
.buzzed-box .bact{font-size:.85rem;color:#64748b;margin-top:3px}
.reveal-box{text-align:center}
.rev-ok{color:#22c55e;font-size:1.05rem;font-weight:700;margin-bottom:.75rem}
.rev-no{color:#ef4444;font-size:1.05rem;font-weight:700;margin-bottom:.75rem}
.next-btn{background:#f59e0b;color:#0f172a;border:none;border-radius:10px;padding:11px 28px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit}
.next-btn:hover{background:#d97706}
#result-screen{min-height:100vh}
.res-card{background:#1e293b;border:1px solid #334155;border-radius:20px;padding:2rem;max-width:460px;width:100%;text-align:center}
.res-icon{font-size:3rem;margin-bottom:.5rem}
.res-winner{font-size:1.7rem;font-weight:800;margin-bottom:.25rem}
.res-sub{color:#64748b;margin-bottom:1.5rem}
.final-scores{display:flex;gap:1rem;justify-content:center;margin-bottom:1.5rem}
.fs-box{background:#0f172a;border-radius:12px;padding:1rem 1.5rem;flex:1}
.fs-box .fn{font-size:.8rem;color:#64748b;margin-bottom:4px}
.fs-box .fp{font-size:2.2rem;font-weight:800}
.fp1{color:#60a5fa}.fp2{color:#f87171}
.hid{display:none!important}
.ping{animation:ping .6s ease-in-out}
@keyframes ping{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
</style>
</head>
<body>

<div id="setup-screen" class="screen active">
  <div class="logo">🎮</div>
  <h1>سين جيم</h1>
  <p class="subtitle">لعبة أسئلة الفرق — أسرع من يضغط يجيب!</p>
  <div class="card">
    <h2>اسمك في اللعبة</h2>
    <input id="pname" class="inp" placeholder="أدخل اسمك..." maxlength="18" oninput="checkName()">
  </div>
  <div class="card">
    <h2>إنشاء غرفة جديدة</h2>
    <button id="create-btn" class="btn btn-gold" onclick="createRoom()" disabled>+ إنشاء غرفة</button>
  </div>
  <div class="sep">— أو —</div>
  <div class="card">
    <h2>انضم لغرفة موجودة</h2>
    <input id="join-code" class="inp code-inp" placeholder="XXXXXX" maxlength="6" oninput="this.value=this.value.toUpperCase()">
    <button id="join-btn" class="btn btn-dark" onclick="joinRoom()" disabled>انضم</button>
  </div>
</div>

<div id="lobby-screen" class="screen">
  <div class="lob-head">
    <div class="code-badge" onclick="copyCode()" title="انقر لنسخ الكود">
      <small>كود الغرفة (انقر للنسخ)</small>
      <strong id="disp-code">------</strong>
    </div>
    <div style="text-align:center;color:#64748b;font-size:.85rem">
      اللاعبون: <span id="p-count" style="color:#f1f5f9;font-weight:700">0</span>
    </div>
    <div id="my-team-badge" style="font-size:.85rem;color:#94a3b8">لم تختر فريقًا</div>
  </div>
  <div class="teams-grid">
    <div class="team-card t1">
      <div class="team-head">⚡ الفريق الأول</div>
      <div class="plist" id="t1-list"></div>
      <button class="join-team-btn" onclick="joinTeam(1)">انضم للفريق الأول</button>
    </div>
    <div class="team-card t2">
      <div class="team-head">🔥 الفريق الثاني</div>
      <div class="plist" id="t2-list"></div>
      <button class="join-team-btn" onclick="joinTeam(2)">انضم للفريق الثاني</button>
    </div>
  </div>
  <div class="lob-ctrl">
    <div id="host-ctrl">
      <div class="fmt-label">صيغة اللعبة:</div>
      <div class="fmt-row" id="fmt-row">
        <button class="fmt-btn on" onclick="setFmt('1v1')">1v1</button>
        <button class="fmt-btn" onclick="setFmt('2v2')">2v2</button>
        <button class="fmt-btn" onclick="setFmt('3v3')">3v3</button>
        <button class="fmt-btn" onclick="setFmt('4v4')">4v4</button>
        <button class="fmt-btn" onclick="setFmt('5v5')">5v5</button>
        <button class="fmt-btn" onclick="setFmt('6v6')">6v6</button>
      </div>

      <div class="split-bar" onclick="toggleSplit()">
        <div class="split-bar-line"></div>
        <div class="split-bar-lbl">🎲 <span>قسملي الفرق</span> <span id="split-arrow">▼</span></div>
        <div class="split-bar-line"></div>
      </div>

      <div id="split-panel" class="split-panel" style="display:none">
        <div class="split-avatars" id="split-avs"></div>
        <div class="count-row">
          <button class="cnt-btn cnt-add" onclick="chgCount(1)">+</button>
          <div style="flex:1;text-align:center">
            <div class="count-lbl">عدد اللاعبين</div>
            <div class="count-val" id="cnt-val">2</div>
          </div>
          <button class="cnt-btn cnt-sub" onclick="chgCount(-1)">−</button>
        </div>
        <div class="names-grid" id="names-grid">
          <input class="name-inp" placeholder="اسم اللاعب">
          <input class="name-inp" placeholder="اسم اللاعب">
        </div>
        <button class="split-go-btn" onclick="doSplit()">🎲 عطني التقسيمة</button>
        <button class="rand-btn" onclick="splitConnected()">✨ قسّم اللاعبين المتصلين عشوائيًا</button>
        <div class="split-result" id="split-result">
          <div class="split-teams" id="split-teams-out"></div>
          <button class="apply-split-btn" id="apply-btn" onclick="applyConnectedSplit()">✅ تطبيق التقسيمة على الغرفة</button>
        </div>
      </div>

      <button class="start-btn" id="start-btn" onclick="doStart()" disabled>🚀 ابدأ اللعبة</button>
      <p class="wait-txt" id="start-hint">يجب أن يكون في كل فريق لاعب واحد على الأقل</p>
    </div>
    <div id="guest-ctrl" class="hid">
      <p class="wait-txt">⏳ في انتظار المضيف لبدء اللعبة...</p>
    </div>
  </div>
</div>

<div id="game-screen" class="screen">
  <div class="g-header">
    <div class="tscore ts1">
      <div class="tname">⚡ الفريق الأول</div>
      <div class="tpts" id="s1">0</div>
    </div>
    <div class="qprog">
      <div class="qnum" id="qnum">1/10</div>
      <div class="qlabel">سؤال</div>
    </div>
    <div class="tscore ts2">
      <div class="tname">🔥 الفريق الثاني</div>
      <div class="tpts" id="s2">0</div>
    </div>
  </div>
  <div class="g-body">
    <div class="cat-pill" id="qcat">سؤال</div>
    <div class="q-box">
      <div class="qn" id="qn">السؤال 1</div>
      <div class="qt" id="qt">...</div>
    </div>
    <div class="opts hid" id="opts"></div>
    <div class="buzz-area" id="buzz-area">
      <button class="buzz-btn" id="buzz-btn" onclick="doBuzz()">اضغط!</button>
      <div class="buzzed-box hid" id="buzzed-box">
        <div class="bwho" id="bwho"></div>
        <div class="bact" id="bact"></div>
      </div>
    </div>
    <div class="reveal-box hid" id="rev-box">
      <div id="rev-msg"></div>
      <button class="next-btn hid" id="next-btn" onclick="doNext()">السؤال التالي ←</button>
    </div>
  </div>
</div>

<div id="result-screen" class="screen">
  <div class="res-card">
    <div class="res-icon" id="res-ico">🏆</div>
    <div class="res-winner" id="res-winner"></div>
    <div class="res-sub" id="res-sub"></div>
    <div class="final-scores">
      <div class="fs-box"><div class="fn">⚡ الفريق الأول</div><div class="fp fp1" id="fs1">0</div></div>
      <div class="fs-box"><div class="fn">🔥 الفريق الثاني</div><div class="fp fp2" id="fs2">0</div></div>
    </div>
    <button class="btn btn-gold" onclick="doRestart()">🔄 لعبة جديدة</button>
  </div>
</div>

<script>
var ws=null,myId=null,roomCode=null,myTeam=null,isHost=false;

function show(id){document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active')});document.getElementById(id).classList.add('active')}

function checkName(){
  var n=document.getElementById('pname').value.trim();
  document.getElementById('create-btn').disabled=!n;
  document.getElementById('join-btn').disabled=!n;
}

function mkCode(){return Math.random().toString(36).substring(2,8).toUpperCase()}

function createRoom(){
  var n=document.getElementById('pname').value.trim();
  if(!n){alert('أدخل اسمك أولًا');return}
  roomCode=mkCode();
  connect(n);
}

function joinRoom(){
  var n=document.getElementById('pname').value.trim();
  var c=document.getElementById('join-code').value.trim().toUpperCase();
  if(!n){alert('أدخل اسمك أولًا');return}
  if(c.length<4){alert('أدخل كود الغرفة');return}
  roomCode=c;
  connect(n);
}

function connect(name){
  var proto=location.protocol==='https:'?'wss':'ws';
  ws=new WebSocket(proto+'://'+location.host+'/ws/'+roomCode);
  ws.onopen=function(){ws.send(JSON.stringify({type:'join',name:name,team:null}));document.getElementById('disp-code').textContent=roomCode;show('lobby-screen')};
  ws.onmessage=function(e){try{handle(JSON.parse(e.data))}catch(err){}};
  ws.onclose=function(){alert('انقطع الاتصال');show('setup-screen')};
  ws.onerror=function(){alert('خطأ في الاتصال');show('setup-screen')};
}

function send(d){if(ws&&ws.readyState===1)ws.send(JSON.stringify(d))}

function handle(msg){
  if(msg.type!=='state')return;
  myId=msg.myId;
  isHost=msg.hostId===myId;
  var me=msg.players.find(function(p){return p.id===myId});
  myTeam=me?me.team:null;
  if(msg.phase==='lobby'){updateLobby(msg);show('lobby-screen')}
  else if(msg.phase==='finished'){showResult(msg);show('result-screen')}
  else{updateLobby(msg);updateGame(msg);show('game-screen')}
}

function updateLobby(st){
  var ps=st.players||[];
  document.getElementById('p-count').textContent=ps.length;
  document.getElementById('disp-code').textContent=roomCode;
  var t1=ps.filter(function(p){return p.team==1});
  var t2=ps.filter(function(p){return p.team==2});
  function renderList(arr,cls){
    if(!arr.length)return '<div style="color:#334155;font-size:.82rem;padding:6px">لا أحد بعد</div>';
    return arr.map(function(p){return '<div class="pitem '+cls+'"><div class="dot"></div>'+p.name+(p.id===myId?'<span class="you">أنت</span>':'')+'</div>'}).join('');
  }
  document.getElementById('t1-list').innerHTML=renderList(t1,'t1');
  document.getElementById('t2-list').innerHTML=renderList(t2,'t2');
  var badge=document.getElementById('my-team-badge');
  badge.textContent=myTeam==1?'⚡ أنت في الفريق الأول':myTeam==2?'🔥 أنت في الفريق الثاني':'لم تختر فريقًا';
  badge.style.color=myTeam==1?'#60a5fa':myTeam==2?'#f87171':'#94a3b8';
  document.querySelectorAll('.fmt-btn').forEach(function(b){b.classList.toggle('on',b.textContent===st.format)});
  var hc=document.getElementById('host-ctrl');
  var gc=document.getElementById('guest-ctrl');
  if(isHost){hc.classList.remove('hid');gc.classList.add('hid');var ok=t1.length>0&&t2.length>0;document.getElementById('start-btn').disabled=!ok;document.getElementById('start-hint').textContent=ok?'كل الأنظمة جاهزة! ابدأ اللعبة':'يجب أن يكون في كل فريق لاعب واحد على الأقل'}
  else{hc.classList.add('hid');gc.classList.remove('hid')}
}

function updateGame(st){
  var q=st.question;
  if(!q)return;
  document.getElementById('s1').textContent=st.scores['1']||0;
  document.getElementById('s2').textContent=st.scores['2']||0;
  document.getElementById('qnum').textContent=(st.currentQ+1)+'/'+st.totalQ;
  document.getElementById('qn').textContent='السؤال '+(st.currentQ+1);
  document.getElementById('qt').textContent=q.q;
  document.getElementById('qcat').textContent=q.cat||'سؤال';
  var opts=document.getElementById('opts');
  var buzzArea=document.getElementById('buzz-area');
  var buzzBtn=document.getElementById('buzz-btn');
  var buzzedBox=document.getElementById('buzzed-box');
  var revBox=document.getElementById('rev-box');
  var nextBtn=document.getElementById('next-btn');
  revBox.classList.add('hid');
  if(st.phase==='question'){
    buzzArea.classList.remove('hid');opts.classList.add('hid');buzzedBox.classList.add('hid');
    buzzBtn.disabled=!myTeam;buzzBtn.textContent=myTeam?'اضغط!':'اختر فريقًا أولًا';buzzBtn.style.background=myTeam?'#f59e0b':'#374151';
  }else if(st.phase==='buzzed'){
    var bz=st.buzzedBy;var isme=bz&&bz.id===myId;
    buzzedBox.classList.remove('hid');
    document.getElementById('bwho').textContent=(bz?bz.name:'')+(bz?' يجيب!':'');
    document.getElementById('bwho').className='bwho '+(bz&&bz.team==1?'t1c':'t2c');
    document.getElementById('bact').textContent=isme?'اختر إجابتك الآن:':'في انتظار الإجابة...';
    buzzBtn.disabled=true;buzzBtn.textContent='⏳';buzzBtn.style.background='#374151';
    if(isme){opts.classList.remove('hid');opts.innerHTML=q.opts.map(function(o,i){return '<button class="opt" onclick="doAnswer('+i+')">'+o+'</button>'}).join('')}
    else opts.classList.add('hid');
  }else if(st.phase==='reveal'){
    buzzBtn.disabled=true;buzzBtn.textContent='✓';buzzBtn.style.background='#374151';
    revBox.classList.remove('hid');opts.classList.remove('hid');
    opts.innerHTML=q.opts.map(function(o,i){var c=i===q.a?'ok':i===st.lastAnswerIndex&&st.lastAnswerIndex!==q.a?'no':'';return '<button class="opt '+c+'" disabled>'+o+'</button>'}).join('');
    var bz=st.buzzedBy;
    document.getElementById('rev-msg').innerHTML=st.lastAnswerCorrect?'<div class="rev-ok">✓ إجابة صحيحة! +100 للفريق '+(bz?bz.team:'')+'</div>':'<div class="rev-no">✗ إجابة خاطئة!</div>';
    if(isHost){nextBtn.classList.remove('hid')}else nextBtn.classList.add('hid');
  }
}

function showResult(st){
  var s1=st.scores['1']||0,s2=st.scores['2']||0;
  document.getElementById('fs1').textContent=s1;document.getElementById('fs2').textContent=s2;
  var ico,win,sub;
  if(s1>s2){ico='🏆';win='⚡ الفريق الأول';sub='الفائز بالمباراة!'}
  else if(s2>s1){ico='🏆';win='🔥 الفريق الثاني';sub='الفائز بالمباراة!'}
  else{ico='🤝';win='تعادل!';sub='مباراة رائعة من الفريقين!'}
  document.getElementById('res-ico').textContent=ico;
  document.getElementById('res-winner').textContent=win;
  document.getElementById('res-sub').textContent=sub;
}

function joinTeam(t){send({type:'joinTeam',team:t})}
function setFmt(f){send({type:'setFormat',format:f})}
function doStart(){send({type:'start'})}
function doBuzz(){send({type:'buzz'})}
function doAnswer(i){document.querySelectorAll('.opt').forEach(function(b){b.disabled=true});send({type:'answer',optionIndex:i})}
function doNext(){send({type:'next'})}
function doRestart(){send({type:'restart'})}
function copyCode(){
  navigator.clipboard.writeText(roomCode).then(function(){
    var el=document.getElementById('disp-code');el.textContent='✓ تم النسخ!';
    setTimeout(function(){el.textContent=roomCode},1500);
  }).catch(function(){alert('الكود: '+roomCode)});
}

// ====== قسملي الفرق ======
var AVATARS=['🐥','🖐','🤙','📞','✌','🐣','🦊','🐸','🦁','🐯','🦋','🌟','🔥','⚡','🎯'];
var splitCount=2;
var lastSplitResult=null;

function toggleSplit(){
  var p=document.getElementById('split-panel');
  var a=document.getElementById('split-arrow');
  var open=p.style.display!=='none';
  p.style.display=open?'none':'block';
  a.textContent=open?'▼':'▲';
}

function renderAvatars(){
  var c=splitCount;
  var avs=document.getElementById('split-avs');
  avs.innerHTML='';
  for(var i=0;i<Math.min(c,AVATARS.length);i++){
    var d=document.createElement('div');d.className='av';d.textContent=AVATARS[i];avs.appendChild(d);
  }
}

function renderNames(){
  var g=document.getElementById('names-grid');
  var old=g.querySelectorAll('.name-inp');
  var vals=[];for(var i=0;i<old.length;i++)vals.push(old[i].value);
  g.innerHTML='';
  for(var i=0;i<splitCount;i++){
    var inp=document.createElement('input');
    inp.className='name-inp';inp.placeholder='اسم اللاعب '+(i+1);
    inp.value=vals[i]||'';g.appendChild(inp);
  }
}

function chgCount(d){
  splitCount=Math.max(2,Math.min(12,splitCount+d));
  document.getElementById('cnt-val').textContent=splitCount;
  renderAvatars();renderNames();
  document.getElementById('split-result').classList.remove('show');
}

function doSplit(){
  var inps=document.getElementById('names-grid').querySelectorAll('.name-inp');
  var names=[];
  inps.forEach(function(i){var v=i.value.trim();if(v)names.push(v);});
  if(names.length<2){alert('أدخل اسمين على الأقل');return}
  var shuffled=names.slice().sort(function(){return Math.random()-.5});
  var mid=Math.ceil(shuffled.length/2);
  var t1=shuffled.slice(0,mid);
  var t2=shuffled.slice(mid);
  lastSplitResult={t1:t1,t2:t2,fromConnected:false};
  showSplitResult(t1,t2,false);
}

function splitConnected(){
  if(!currentState)return;
  var players=currentState.players.filter(function(p){return p.name});
  if(players.length<2){alert('لا يوجد لاعبون متصلون كافيون');return}
  var shuffled=players.slice().sort(function(){return Math.random()-.5});
  var mid=Math.ceil(shuffled.length/2);
  var t1=shuffled.slice(0,mid);
  var t2=shuffled.slice(mid);
  lastSplitResult={t1:t1,t2:t2,fromConnected:true};
  showSplitResult(t1.map(function(p){return p.name}),t2.map(function(p){return p.name}),true);
}

function showSplitResult(t1names,t2names,showApply){
  document.getElementById('split-result').classList.add('show');
  document.getElementById('split-teams-out').innerHTML=
    '<div class="split-team-box split-t1"><div class="split-team-name">⚡ الفريق الأول</div>'+
    t1names.map(function(n){return '<div class="split-player">'+n+'</div>'}).join('')+'</div>'+
    '<div class="split-team-box split-t2"><div class="split-team-name">🔥 الفريق الثاني</div>'+
    t2names.map(function(n){return '<div class="split-player">'+n+'</div>'}).join('')+'</div>';
  var applyBtn=document.getElementById('apply-btn');
  applyBtn.style.display=showApply?'block':'none';
  var avEls=document.getElementById('split-avs').querySelectorAll('.av');
  avEls.forEach(function(av){av.classList.remove('selected')});
}

function applyConnectedSplit(){
  if(!lastSplitResult||!lastSplitResult.fromConnected)return;
  send({type:'assignTeams',t1ids:lastSplitResult.t1.map(function(p){return p.id}),t2ids:lastSplitResult.t2.map(function(p){return p.id})});
}

// init split panel
renderAvatars();renderNames();
</script>
</body>
</html>`;

export class GameRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.sessions = [];
    this.game = {
      phase: 'lobby',
      hostId: null,
      format: '1v1',
      questions: [],
      currentQ: 0,
      buzzedBy: null,
      lastAnswerCorrect: null,
      lastAnswerIndex: null,
      scores: { '1': 0, '2': 0 },
    };
  }

  async fetch(request) {
    const upgrade = request.headers.get('Upgrade');
    if (!upgrade || upgrade.toLowerCase() !== 'websocket') {
      return new Response('Expected WebSocket', { status: 426 });
    }
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.handleSession(server);
    return new Response(null, { status: 101, webSocket: client });
  }

  handleSession(ws) {
    ws.accept();
    const id = crypto.randomUUID();
    const session = { ws, id, name: '', team: null };
    this.sessions.push(session);
    if (!this.game.hostId) this.game.hostId = id;
    this.sendTo(ws, { type: 'connected', playerId: id });
    this.broadcast();

    ws.addEventListener('message', (evt) => {
      try { this.handleMsg(session, JSON.parse(evt.data)); } catch (e) {}
    });

    const cleanup = () => {
      this.sessions = this.sessions.filter(s => s !== session);
      if (this.game.hostId === id && this.sessions.length > 0) {
        this.game.hostId = this.sessions[0].id;
      }
      this.broadcast();
    };
    ws.addEventListener('close', cleanup);
    ws.addEventListener('error', cleanup);
  }

  handleMsg(session, data) {
    switch (data.type) {
      case 'join':
        session.name = String(data.name || '').substring(0, 18);
        session.team = data.team || null;
        this.broadcast();
        break;

      case 'joinTeam':
        session.team = data.team;
        this.broadcast();
        break;

      case 'setFormat':
        if (session.id === this.game.hostId) {
          this.game.format = data.format;
          this.broadcast();
        }
        break;

      case 'start':
        if (session.id === this.game.hostId && this.game.phase === 'lobby') {
          const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
          this.game.questions = shuffled;
          this.game.currentQ = 0;
          this.game.scores = { '1': 0, '2': 0 };
          this.game.buzzedBy = null;
          this.game.lastAnswerCorrect = null;
          this.game.lastAnswerIndex = null;
          this.game.phase = 'question';
          this.broadcast();
        }
        break;

      case 'buzz':
        if (this.game.phase === 'question' && !this.game.buzzedBy && session.team) {
          this.game.buzzedBy = { id: session.id, name: session.name, team: session.team };
          this.game.phase = 'buzzed';
          this.broadcast();
        }
        break;

      case 'answer':
        if (this.game.phase === 'buzzed' && this.game.buzzedBy && this.game.buzzedBy.id === session.id) {
          const q = this.game.questions[this.game.currentQ];
          const correct = data.optionIndex === q.a;
          if (correct) {
            const t = String(session.team);
            this.game.scores[t] = (this.game.scores[t] || 0) + 100;
          }
          this.game.lastAnswerCorrect = correct;
          this.game.lastAnswerIndex = data.optionIndex;
          this.game.phase = 'reveal';
          this.broadcast();
        }
        break;

      case 'next':
        if (session.id === this.game.hostId && this.game.phase === 'reveal') {
          this.game.currentQ++;
          if (this.game.currentQ >= this.game.questions.length) {
            this.game.phase = 'finished';
          } else {
            this.game.phase = 'question';
            this.game.buzzedBy = null;
            this.game.lastAnswerCorrect = null;
            this.game.lastAnswerIndex = null;
          }
          this.broadcast();
        }
        break;

      case 'assignTeams':
        if (session.id === this.game.hostId && Array.isArray(data.t1ids) && Array.isArray(data.t2ids)) {
          for (const s of this.sessions) {
            if (data.t1ids.includes(s.id)) s.team = 1;
            else if (data.t2ids.includes(s.id)) s.team = 2;
          }
          this.broadcast();
        }
        break;

      case 'restart':
        if (session.id === this.game.hostId) {
          this.game.phase = 'lobby';
          this.game.scores = { '1': 0, '2': 0 };
          this.game.currentQ = 0;
          this.game.buzzedBy = null;
          this.game.questions = [];
          this.broadcast();
        }
        break;
    }
  }

  broadcast() {
    const players = this.sessions.map(s => ({ id: s.id, name: s.name, team: s.team }));
    const q = this.game.questions[this.game.currentQ] || null;
    for (const session of this.sessions) {
      this.sendTo(session.ws, {
        type: 'state',
        myId: session.id,
        hostId: this.game.hostId,
        phase: this.game.phase,
        format: this.game.format,
        players,
        scores: this.game.scores,
        currentQ: this.game.currentQ,
        totalQ: this.game.questions.length,
        question: q,
        buzzedBy: this.game.buzzedBy,
        lastAnswerCorrect: this.game.lastAnswerCorrect,
        lastAnswerIndex: this.game.lastAnswerIndex,
      });
    }
  }

  sendTo(ws, data) {
    try { ws.send(JSON.stringify(data)); } catch (e) {}
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/ws/')) {
      const code = url.pathname.split('/')[2];
      if (!code) return new Response('Missing room code', { status: 400 });
      const id = env.GAME_ROOM.idFromName(code);
      const room = env.GAME_ROOM.get(id);
      return room.fetch(request);
    }
    return new Response(HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  },
};
