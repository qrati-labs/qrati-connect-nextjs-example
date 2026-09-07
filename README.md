# Qrati Connect — Next.js Example

Embeds [Qrati Connect](https://qrati.com) into a Next.js (App Router) app using
the native **React component**, with a host-controlled light/dark theme and a
full SEO layout.

## Integration method: React component

The widget is rendered dynamically inside a client component (`app/page.tsx`):

```tsx
'use client';
import dynamic from 'next/dynamic';

const QratiConnect = dynamic(() => import('@qratilabs/qrati-connect'), {
  ssr: false,
});

<QratiConnect organizationId={ORGANIZATION_ID} theme={theme} router="hash" />
```

## Run it

```bash
pnpm install
cp .env.example .env   # optional — sensible defaults are baked in
pnpm dev
```

## Configuration

| Variable                      | Description                                                       |
| ----------------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_ORGANIZATION_ID` | Your Qrati organization ID                                        |
| `NEXT_PUBLIC_API_ENDPOINT`    | Demo-login endpoint for custom-auth orgs. Leave empty to skip it. |
| `NEXT_PUBLIC_GTM_ID`          | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`)              |
| `NEXT_PUBLIC_BASE_PATH`       | Base deployment path (defaults to `/connect/nextjs-example`)       |

## Other integration methods

- **Web component** — `<qrati-connect>` from the CDN (see the Svelte / Solid / Qwik / Lit examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
