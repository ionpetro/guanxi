# Orchestrator review — 2026-11-03

The recovered project was a law-course copy with no Mandarin lesson files. The resumed build now contains 14 units, 70 lessons, 703 lesson items, 450 glossary entries (399 distinct written forms), 70 sentence builds, 28 character-component cards, 14 original dialogue scenes and 28 separate assessment scenarios. Counts are reproduced in `course-counts.json`; recurrence is intentional practice, not additional unique vocabulary.

## Separate editorial passes

- The first-half writer produced u1–u7. The core builder, who did not write those units, checked their language and recorded corrections in `language-u1-u7.md`.
- The orchestrator wrote u8–u14. The first-half writer independently checked them and recorded corrections in `language-u8-u14.md`.
- Root independently read all culture cards against the browsed evidence bank, replaced generic source-process prose, corrected attribution and improved distractors; see `root-culture-review.json`.
- A separate final pedagogy critique found an untaught surname task, weak sound discrimination, ambiguous number/price questions and a translation shortcut. All priority fixes were applied; see `final-pedagogy.md`.
- The orchestrator then audited all 28 held-out scenes for answer leakage and removed target-language English glosses from prompts, retaining translation in feedback. English context still establishes the situation.

These are independent AI editorial passes, not native-speaker or professional certification.

## Core behaviors verified

The final automated gates pass: 19 tests, content validation with zero errors and warnings, static build, and clean whitespace check. Root’s three additional learning-invariant tests also pass. Course-level checks exercise every sitting across twenty random seeds, preserve sentence-tile multiplicity, bound sitting size and keep held-out assessments out of ordinary review pools.

Material fixes found during review include tone-number equivalence and neutral-tone position, due dates incorrectly delayed by early recall, meaningful source-ID links, hidden text during listening, balanced sittings, completed-lesson restart, actual-review badge tracking, first-miss speed stopping, assessment-specific results, malformed progress repair and matching-pair duplication. Source and sandhi notes are visible on cards. The engine is independent of browser APIs; browser integration uses available Mandarin speech voices with explicit ungraded fallback.

Root conducts final interactive QA and deployment. At this checkpoint, root has reported completed sessions in u1l1, u8l1 and u12l3, bounded mistake retries, same-day streak/persistence and phone layout checks; final browser and production results belong to its separate QA/deployment record.

## Remaining practical limits

- TTS is synthesized practice audio, varies by browser/platform and is not a pronunciation grade or a native recording.
- Typed pinyin, recognition and sentence reconstruction do not measure spontaneous conversation. Every lesson includes a speak-aloud or practical mission; real speaking feedback needs another person.
- Two held-out scenarios per unit give a small transfer sample. Repeat attempts are practice and should not be described as unseen mastery.
- Culture claims are local and bounded; original team-practice advice is identified separately. Time-sensitive travel, payment and company rules must be checked at use.
- No fluency, CEFR/HSK/BCT equivalence, native review or official endorsement is claimed.

The product is substantial enough for repeated foundational practice and ready for root’s final browser/deployment gate, while remaining honest about what the learner still needs from real conversation.
