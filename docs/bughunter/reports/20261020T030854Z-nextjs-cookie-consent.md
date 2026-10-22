# BugHunter audit: Next.js cookie-consent initialization

- **Repository:** `qrati-labs/qrati-connect-nextjs-example`
- **Base:** `main` at `f9c7121e773b06a873297105d40110e4309c8d07` (preflight remote SHA)
- **Workflow:** initial consent setup and opening cookie preferences from the footer
- **Disposition:** report-only; no confirmed defect, no issue created
- **Existing PR overlap check:** open PR #2 changes only the BugHunter index/report and documents demo login identity. Its behavior does not overlap cookie-consent initialization; no code change there.

## Scope and trace

Reviewed `app/layout.tsx` (GTM inclusion and `CookieConsentBanner` mount), `app/components/CookieConsentBanner.tsx` (mount-time GTM init, geo lookup, cleanup flag, window helper), `app/lib/cookieConsent.ts` (GTM defaults, geo cache/failure fallback, consent mode selection/callbacks, and preferences entry point), and the footer handler in `app/page.tsx`.

The mount path calls `initGtm`, performs `checkConsentRequired`, and then initializes the CMP unless unmounted. A failed geo lookup returns `true` (opt-in mode); a cached result is session-scoped. Non-required visitors receive opt-out mode and granted consent, while required visitors receive opt-in mode and consent callbacks map the analytics category to analytics and advertising consent signals. The footer first uses the window helper when installed and otherwise invokes the module helper, which initializes the CMP on demand before showing preferences. `initPromise` serializes CMP initialization.

## Finding

No defect was confirmed from the available repository evidence. The reviewed paths consistently fail closed when geolocation is unavailable, and the on-demand preferences path has an initialization fallback. No relevant consent-specific test files or test script were present in this example repository.

Two areas remain unverified rather than findings: the interaction between the layout's `GoogleTagManager` component and the separate dynamic `initGtm` loader under actual browser script scheduling; and whether the product intends advertising consent signals to follow the single analytics category. Establishing either requires runtime/integration evidence and/or an explicit policy contract. This audit does not claim either is a defect.

## Tests and verification

- No tests authored; there is no consent-specific test harness or test script in this example.
- No tests, builds, lint, type-check, installs, or package managers run, per BugHunter boundary.
- `git diff --check` passed.

## Limitations

Static source review only; no browser session, network geolocation endpoint, Google Tag Manager, or consent-provider runtime was exercised. No external production test was performed.

## Timing (measured wall-clock)

| Phase | Segment start (UTC) | Segment end (UTC) | Elapsed |
|---|---|---|---|
| `preflight` | 2026-10-20T03:04:39Z | 2026-10-20T03:05:03Z | 00:00:25 (0.4 min) |
| `audit` | 2026-10-20T03:05:12Z | 2026-10-20T03:09:40Z | 00:04:28 (4.5 min) |
| **Total run (preflight start to finish)** | 2026-10-20T03:04:39Z | 2026-10-20T03:09:40Z | **00:05:01 (5.0 min)** |
| Unclassified interval between marked phases | — | — | 00:00:08 (0.1 min) |

Timer record: `/home/hermes/.hermes/cache/scratch/bughunter-timing/20261020T030439Z-90f3e49841c4416da00fd8aaa860da90.json`. Timing-table insertion itself occurs after this measurement snapshot.
