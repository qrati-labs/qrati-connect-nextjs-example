# Qrati Connect — Next.js Example

Embeds [Qrati Connect](https://qrati.com) into a Next.js (App Router) app using
the native **React component**, with a host-controlled light/dark theme and a
demo login for organizations that use custom auth.

## Integration method: React component

The widget is rendered inside a client component (`app/page.tsx`):

```tsx
'use client';
import QratiConnect from '@qratilabs/qrati-connect';

<QratiConnect organizationId={ORGANIZATION_ID} uid={user.userId} theme={theme} router="hash" />
```

It only mounts after a user signs in, so it never runs during SSR.

## Run it

```bash
bun install
cp .env.example .env   # optional — sensible defaults are baked in
bun dev
```

## Configuration

| Variable                       | Description                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_ORGANIZATION_ID`  | Your Qrati organization ID                                        |
| `NEXT_PUBLIC_API_ENDPOINT`     | Demo-login endpoint for custom-auth orgs. Leave empty to skip it. |

## Demo auth

Orgs with custom auth expect a known user. The login form (`app/auth.ts`) derives
a stable `uid` from the email, optionally POSTs to `NEXT_PUBLIC_API_ENDPOINT`,
then renders the widget with `uid` / `fname` / `lname` so the user is recognized.

## Other integration methods

- **Web component** — `<qrati-connect>` from the CDN (see the Svelte / Solid / Qwik / Lit examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
