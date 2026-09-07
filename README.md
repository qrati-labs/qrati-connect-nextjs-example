# Qrati Connect — Next.js Example

Embeds [Qrati Connect](https://qrati.com) into a Next.js (App Router) app using
the native **React component**, with a host-controlled light/dark theme and a showcase of **custom cloud storage**.

## Integration method: React component

The widget is rendered dynamically inside a Client Component (`app/page.tsx`) with SSR disabled to ensure seamless browser custom-element registration:

```tsx
'use client';
import dynamic from 'next/dynamic';

const QratiConnect = dynamic(() => import('@qratilabs/qrati-connect'), {
  ssr: false,
});

<QratiConnect
  organizationId={ORGANIZATION_ID}
  theme={theme}
  router="hash"
/>
```

## Custom Cloud Storage

The demo organization is configured for **Custom Storage** (AWS S3 / Cloudflare R2) on the Qrati backend. Uploads from attendees stream directly from the browser to the customer's cloud storage bucket via presigned `PUT` URLs—bypassing your Next.js server entirely and eliminating host bandwidth bottlenecks.

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
| `NEXT_PUBLIC_GTM_ID`          | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`)              |
| `NEXT_PUBLIC_BASE_PATH`       | Base deployment path (defaults to `/connect/nextjs-example`)       |

## Other integration methods

- **Web component** — `<qrati-connect>` from the CDN (see the Svelte / Solid / Qwik / Lit examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
