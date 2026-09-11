-- Run once in the Supabase SQL editor for project fyhkcdsmpuqfuzolkzxp.
-- Creates the usage-tracking table for quiz.maxwellstudy.com.

create table if not exists public.quiz_events (
  id             bigint generated always as identity primary key,
  created_at     timestamptz not null default now(),

  event          text not null check (event in
                   ('quiz_started','question_answered','quiz_submitted','quiz_exit')),
  course         text not null,          -- 'cpa' | 'intermediate'
  quiz           text not null,          -- url slug, e.g. 'leases'
  attempt_id     text not null,          -- one id per time a quiz is opened

  question_id    text,
  question_index int,
  is_correct     boolean,

  correct_count  int,
  total_count    int,
  active_ms      int,                    -- on-screen time so far, this attempt

  session_id     text,                   -- stable per browser
  student_email  text,                   -- from Thinkific {{email}}, when passed
  student_name   text,
  referrer       text
);

create index if not exists quiz_events_created_at_idx on public.quiz_events (created_at desc);
create index if not exists quiz_events_attempt_idx    on public.quiz_events (attempt_id);
create index if not exists quiz_events_quiz_idx       on public.quiz_events (course, quiz);
create index if not exists quiz_events_question_idx   on public.quiz_events (quiz, question_id);

-- The site ships the anon key, so the public must be able to INSERT and
-- nothing else. With no SELECT policy, the data is write-only from the browser
-- and readable only from the SQL editor or with the service role key.
alter table public.quiz_events enable row level security;

drop policy if exists "quiz_events anon insert" on public.quiz_events;
create policy "quiz_events anon insert"
  on public.quiz_events for insert
  to anon
  with check (true);
