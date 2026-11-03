# Business Mandarin course: plan (draft, 2026-11-03)

Next app in the family (Skepsis, Carpe, Gnothi, Objection, Agora, Oikos).
Status: **waiting for approval** before the full 7-phase build.

## Choices so far
- **Goal:** Business Mandarin (work, meetings, email, dining, negotiation)
- **Interface:** English
- **Script:** Simplified characters, always with pinyin
- **Assumed (please confirm):** the learner starts from zero, so unit 1 teaches sounds and tones

## Name and mascot (proposal)
- **Name: Guanxi** (关系, "relationships / connections"), the word every business guide to China starts with.
- **Mascot: Bao, a red-crowned crane** (a symbol of luck and long life; avoids the overused panda). Wears a tiny lanyard.
- Tagline: "Mandarin for the meeting room"

## Units (14, the cap)
| # | Unit | Core words and skills |
|---|------|-----------------------|
| 1 | Sounds and tones | pinyin, the 4 tones + neutral, 你好 / 您好 |
| 2 | Introductions and business cards | 姓, 叫, 公司, 职位, 名片, giving a card with two hands |
| 3 | Numbers and money | 一 to 亿, 万 (counting in ten-thousands), 元 / 块, prices |
| 4 | Time and scheduling | days, dates, 几点, 约时间, 方便吗 |
| 5 | The office | 同事, 经理, 部门, 办公室, titles like 王总 |
| 6 | Phone and WeChat | 喂, 加微信, 发消息, leaving a message |
| 7 | Email and formal writing | 您好, 附件, 此致敬礼, polite openings and closings |
| 8 | Meetings | 开会, 议程, 意见, agreeing and disagreeing politely |
| 9 | Dining and toasts | 干杯, 敬酒, seating, who pays |
| 10 | Face and polite refusal | 面子, 不好意思, 我们考虑一下 (and what it really means) |
| 11 | Negotiation | 价格, 折扣, 优惠, 合同, 签 |
| 12 | Business travel | 出差, 机场, 酒店, 发票 (receipts) |
| 13 | Reports and figures | 增长, 百分之, 销售额, describing a chart |
| 14 | Review + mock test | mixed review in the style of the Business Chinese Test |

## What is new compared with the other apps
- **Audio is needed.** Tones can't be learned silently. Plan: the browser's built-in Chinese voice (free, no files), with a "tap to hear" button on every word and a "which tone?" exercise. Needs a small engine change.
- **Characters:** a "match character to meaning" drill and radicals as memory hooks (like Skepsis does with roots). No handwriting.
- **Culture cards** for units 9 to 11 (face, toasts, indirect "no"), checked against sources, no stereotypes.

## To check in the research phase (not verified yet)
- The official Business Chinese Test (BCT, run by China's Center for Language Education and Cooperation): levels, format, word lists.
- Which HSK words overlap with business vocabulary, so units follow a real frequency order.
- Copyright: write all dialogues ourselves; never copy textbook or test material.

## Build (after approval)
Same recipe as Carpe: Research → Curriculum → Engine → Content (write + 2 checkers + fix per unit) → QA in Chrome → Review → Ship.
- Folder: `experiments/business-mandarin`, GitHub `ionpetro/guanxi` (public, MIT), Vercel project `guanxi`
- Added to the shared `FAMILY` list so all seven apps link to each other
- Analytics: none (like Agora and Oikos) unless you want PostHog
- Cost: about $500 of credits, ~8 hours

## Change (2026-11-03, from the user)
- **Culture first, not just language.** Every unit teaches how people in China actually live and work, with local examples (cities, food, festivals, apps, workplace habits), the way Skepsis uses Texas examples.
- Same build as the Greek apps. **Fable orchestrates** (curriculum, engine, final review); **Opus builds** (research, writing, checking, fixing, QA, deploy).
- The 14 units above are a starting point; the Fable curriculum step rebalances them around culture.
- Folder renamed to `experiments/mandarin`. Base engine copied from Objection (English sibling of Carpe).
