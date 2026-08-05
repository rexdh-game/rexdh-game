-- ═══════════════════════════════════════════════════════════════════
-- مخطّط قاعدة بيانات ريكسد على Supabase
-- الصقه كاملاً في: لوحة Supabase ← SQL Editor ← New query ← Run
-- ═══════════════════════════════════════════════════════════════════
--
-- ملاحظة: لا نُنشئ جدول مستخدمين ولا نخزّن كلمات مرور. Supabase Auth
-- يتكفّل بذلك في مخطّط auth المحمي: البريد وكلمة المرور (مهشَّمة bcrypt)
-- لا يصلان إلى جداولنا ولا إلى كود الموقع إطلاقاً.
--
-- نخزّن شيئاً واحداً فقط: أي أسئلة جاءت لكل حساب، حتى لا تتكرّر عليه
-- مهما غيّر الجهاز أو مسح المتصفّح.

create table if not exists public.progress (
  user_id    uuid        not null references auth.users(id) on delete cascade,
  cat_id     text        not null,
  decks      jsonb       not null,   -- [[..],[..],[..]] ترتيب مخلوط لكل مستوى
  pos        jsonb       not null,   -- [n,n,n] موضع المؤشّر لكل مستوى
  updated_at timestamptz not null default now(),
  primary key (user_id, cat_id)
);

-- ═══ أمان مستوى الصفّ ═══
-- هذا هو جوهر الحماية: حتى لو أخذ أحدهم المفتاح العام من الكود (وهو
-- مصمَّم ليكون علنياً)، لا يستطيع قراءة أو تعديل صفٍّ ليس له. القاعدة
-- تُطبَّق في الخادم فلا يمكن تخطّيها من المتصفّح.
alter table public.progress enable row level security;

drop policy if exists "read own progress"   on public.progress;
drop policy if exists "insert own progress" on public.progress;
drop policy if exists "update own progress" on public.progress;
drop policy if exists "delete own progress" on public.progress;

create policy "read own progress" on public.progress
  for select using (auth.uid() = user_id);

create policy "insert own progress" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "update own progress" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "delete own progress" on public.progress
  for delete using (auth.uid() = user_id);

-- فهرس يسرّع جلب تقدّم اللاعب كاملاً عند الدخول
create index if not exists progress_user_idx on public.progress (user_id);

-- حدّ حجم منطقي: يمنع أي حساب من إغراق القاعدة بحمولة ضخمة
alter table public.progress
  drop constraint if exists progress_size_check;
alter table public.progress
  add constraint progress_size_check
  check (pg_column_size(decks) < 200000);
