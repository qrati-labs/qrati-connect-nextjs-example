# Qrati Connect — Next.js Example

Embed a real-time event discovery widget in any **Next.js** application using [Qrati Connect](https://www.npmjs.com/package/@qratilabs/qrati-connect) as a Web Component.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the widget in action.

## How It Works

### 1. Organisation ID constant

All examples share a single constant so you can swap in your real org ID in one place:

```ts
// app/config.ts
export const EXAMPLE_ORG_ID = 'YOUR_ORGANIZATION_ID';
```

### 2. Client component wrapper

Because Web Components rely on browser APIs, the widget is loaded inside a `'use client'` component that dynamically adds the CDN script:

```tsx
// app/QratiWidget.tsx
'use client';

import { useEffect } from 'react';
import { EXAMPLE_ORG_ID } from './config';

export default function QratiWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src =
      'https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect@latest/element/web.es.js';
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <qrati-connect
      organization-id={EXAMPLE_ORG_ID}
      theme="light"
      router="hash"
    />
  );
}
```

### 3. Render on the home page

Import the client component into your Server Component page — no additional configuration needed:

```tsx
// app/page.tsx
import QratiWidget from './QratiWidget';

export default function Home() {
  return <QratiWidget />;
}
```

> **Tip:** You can also use `next/dynamic` with `ssr: false` if you prefer lazy-loading the widget.

## Available Attributes

| Attribute           | Type     | Default    | Description                           |
| ------------------- | -------- | ---------- | ------------------------------------- |
| `organization-id`   | `string` | —          | **Required.** Your Qrati org ID.      |
| `theme`             | `string` | `"light"`  | `"light"` or `"dark"`.                |
| `router`            | `string` | `"memory"` | `"memory"` or `"hash"`.              |
| `uid`               | `string` | —          | Optional authenticated user ID.       |
| `fname`             | `string` | —          | Optional user first name.             |
| `lname`             | `string` | —          | Optional user last name.              |

## Tech Stack

- **Next.js 16** — App Router, React Server Components
- **React 19** — concurrent rendering
- **TypeScript 5** — strict type checking
- **Tailwind CSS 4** — utility-first styles

## Learn More

- [Qrati Connect on npm](https://www.npmjs.com/package/@qratilabs/qrati-connect)
- [Qrati website](https://qrati.com)
- [Next.js documentation](https://nextjs.org/docs)

---

### Open it in

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/qrati-labs/qrati-connect-nextjs-example)
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/qrati-labs/qrati-connect-nextjs-example)
[![Open in VS Code](https://img.shields.io/badge/Open_in-VS_Code-blue?logo=visualstudiocode)](https://vscode.dev/github/qrati-labs/qrati-connect-nextjs-example)

---

### About Qrati

**Qrati** helps communities discover and share events effortlessly. Qrati Connect lets any website embed a beautiful, fully-featured event discovery widget in minutes — no back-end required. Bring the power of community events to your platform and delight your users with a seamless browsing experience.
