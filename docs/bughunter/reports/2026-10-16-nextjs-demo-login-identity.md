# BugHunter: Next.js demo login identity collision

- **Run:** `20261016T114338Z-e0affbcb820d47a1addda776cf7aaa41`
- **Reviewed:** demo sign-in → persisted demo user → QratiConnect identity props
- **Base:** `origin/main` at `f9c7121e773b06a873297105d40110e4309c8d07`
- **Disposition:** report-only; no source/test change and no issue opened.
- **Issue:** none (finding is in a deliberately thin demo login; a safe fix requires choosing a stable unique identity contract).

## Finding

**[Low] Distinct demo emails can collapse to the same Qrati user ID.** In `app/page.tsx:86-99`, sign-in trims and lowercases the email, then constructs `uid` by replacing every run of non-ASCII-alphanumeric characters with `-`. Consequently `ada+guest@example.com` and `ada.guest@example.com` both become `nextjs-demo-ada-guest-example-com`. Both are valid email-shaped inputs accepted by the native email field and the handler; signing in as either yields the same `uid`. At `app/page.tsx:221`, that identifier is passed to `QratiConnect`. The README describes `uid` as the signed-in user's identity, and the page FAQ states it is used for attributing uploads, votes, and reactions. Thus activity from these distinct demo identities can be attributed to the same account in the example organization. This is a reachable identity collision, not a claim about production host authentication (the login is explicitly documented as a demo).

**Suggested direction:** derive demo identity from a collision-resistant stable representation of the normalized email (or another explicitly unique demo identifier), and cover punctuation variants in a regression test. No implementation was made because selecting/maintaining an identity format is a product contract decision and this workflow is an example-only mock login.

## Evidence and scope

- `app/page.tsx:86-101`: validation, email normalization, lossy UID transformation, and localStorage persistence.
- `app/page.tsx:218-222`: same UID is passed into the widget.
- `README.md:10-16`: login intentionally represents host auth and is not production authentication.
- `app/layout.tsx` and `app/lib/cookieConsent.ts` were inspected for the separate consent initialization; no additional confirmed finding was identified in that path.
- No open PRs were listed for this repository in the injected preflight. No duplicate matching issue was returned by the repository issue query.
- CodeGraph reported this worktree unindexed; targeted source inspection was used instead.

## Tests and limitations

- No tests were authored.
- Tests, builds, lint, type-check, installs, and package-manager commands: **NOT RUN BY BUGHUNTER**.
- Static source review only; no browser or backend behavior was exercised. No external service or production system was touched.

## Timing (UTC)

- Run start (injected): `2026-10-16T11:43:38Z`.
- Preflight (injected): 22 seconds; not repeated or included in audit elapsed time.
- Audit activity began after preflight. Exact phase boundaries were not instrumented; no phase durations are asserted.
- Total audit duration: recorded in the final delivery after PR verification; no estimate/backfill.
