-- Reports for quiz.maxwellstudy.com. Run any block in the Supabase SQL editor.
-- An "attempt" is one opening of one quiz; active_ms only counts on-screen time,
-- and each event carries the running total, so attempts aggregate with max().

-- ── Headline numbers, last 30 days ──────────────────────────────────────────
with attempts as (
  select attempt_id,
         min(created_at)                             as started_at,
         max(coalesce(student_email, session_id))    as learner,
         max(active_ms)                              as active_ms,
         bool_or(event = 'quiz_submitted')           as submitted
  from public.quiz_events
  where created_at > now() - interval '30 days'
  group by attempt_id
)
select
  count(*)                                                   as attempts,
  count(distinct learner)                                    as students,
  count(*) filter (where submitted)                          as completed,
  round(100.0 * count(*) filter (where submitted) / nullif(count(*),0), 1) as completion_pct,
  round(sum(active_ms) / 60000.0, 1)                         as total_minutes,
  round(avg(active_ms) / 60000.0, 1)                         as avg_minutes_per_attempt
from attempts;

-- ── Per quiz ────────────────────────────────────────────────────────────────
with attempts as (
  select attempt_id, course, quiz,
         max(coalesce(student_email, session_id)) as learner,
         max(active_ms)                           as active_ms,
         bool_or(event = 'quiz_submitted')        as submitted,
         max(correct_count)                       as correct_count,
         max(total_count)                         as total_count
  from public.quiz_events
  group by attempt_id, course, quiz
)
select course, quiz,
       count(*)                                   as attempts,
       count(distinct learner)                    as students,
       count(*) filter (where submitted)          as completed,
       round(avg(active_ms) / 60000.0, 1)         as avg_minutes,
       round(avg(100.0 * correct_count / nullif(total_count,0))
             filter (where submitted), 1)         as avg_score_pct
from attempts
group by course, quiz
order by attempts desc;

-- ── Hardest questions: the ones to rewrite first ────────────────────────────
select quiz, question_id,
       count(*)                                          as answered,
       round(100.0 * count(*) filter (where is_correct)
             / nullif(count(*),0), 1)                     as pct_correct
from public.quiz_events
where event = 'question_answered'
group by quiz, question_id
having count(*) >= 10
order by pct_correct asc
limit 25;

-- ── Daily usage ─────────────────────────────────────────────────────────────
with attempts as (
  select attempt_id,
         date_trunc('day', min(created_at))       as day,
         max(coalesce(student_email, session_id)) as learner,
         max(active_ms)                           as active_ms
  from public.quiz_events
  group by attempt_id
)
select day::date,
       count(*)                           as attempts,
       count(distinct learner)            as students,
       round(sum(active_ms)/60000.0, 1)   as minutes
from attempts
group by day
order by day desc
limit 60;

-- ── Reported questions, newest first ────────────────────────────────────────
select created_at, material_id, message
from public.feedback
where source = 'quiz'
order by created_at desc
limit 50;
