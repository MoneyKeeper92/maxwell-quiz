-- Run once in the Supabase SQL editor for project fyhkcdsmpuqfuzolkzxp,
-- after 01_quiz_events.sql.
--
-- Two changes for the no-login TBS page at /aicpa-far-tbs-110110:
--   1. three new event names, and a jsonb column for per-cell results
--   2. campaign columns, so a click from a YouTube description is not
--      anonymous. Every quiz benefits, not only the simulation.

alter table public.quiz_events
  add column if not exists detail       jsonb,
  add column if not exists utm_source   text,
  add column if not exists utm_medium   text,
  add column if not exists utm_campaign text,
  add column if not exists utm_content  text;

-- The event name is a check constraint, so it has to be replaced rather than
-- extended. Named by Postgres as <table>_<column>_check when 01 created it.
alter table public.quiz_events drop constraint if exists quiz_events_event_check;
alter table public.quiz_events add constraint quiz_events_event_check
  check (event in (
    'quiz_started','question_answered','quiz_submitted','quiz_exit',
    'sim_started','exhibit_opened','sim_submitted'
  ));

create index if not exists quiz_events_campaign_idx
  on public.quiz_events (utm_campaign, utm_content)
  where utm_campaign is not null;

-- The insert-only policy from 01 still applies: the anon key may INSERT and
-- nothing else, so this data stays unreadable from the browser.
