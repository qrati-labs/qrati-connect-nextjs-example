'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ORGANIZATION_ID, GITHUB_ORG, REPO } from './config';
import { showCookiePreferences } from './lib/cookieConsent';

const QratiConnect = dynamic(() => import('@qratilabs/qrati-connect'), {
  ssr: false,
});

const repoUrl = `https://github.com/${GITHUB_ORG}/${REPO}`;
const vscodeUrl = `https://vscode.dev/github/${GITHUB_ORG}/${REPO}`;
const npmUrl = 'https://www.npmjs.com/package/@qratilabs/qrati-connect';
const year = new Date().getFullYear();

function initTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const t =
    (localStorage.getItem('qc-theme') as 'light' | 'dark') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
  return t;
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>(initTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qc-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('qc-theme', next);
  };

  const handleCookiePreferences = () => {
    if (typeof window !== 'undefined' && (window as any).showCookiePreferences) {
      (window as any).showCookiePreferences();
    } else {
      void showCookiePreferences();
    }
  };

  return (
    <div className="app">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <div className="page-shell">
        <div className="page-frame">
          <header className="hero">
            <p className="hero-kicker">Embeddable React Gallery Component</p>
            <h1>
              <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">
                Qrati
              </a>{' '}
              Connect inside a Next.js host site
            </h1>
            <p className="hero-copy">
              A drop-in React component for Next.js to embed live event photo galleries with guest
              uploads, full-screen lightbox, emoji reactions, and contest leaderboards. This example
              showcases <strong>custom cloud storage</strong> (direct browser-to-bucket S3/R2 uploads with bucket CORS).
            </p>

            <div className="action-pills" aria-label="Example links">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <span>View on GitHub</span>
              </a>
              <a href={vscodeUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M10.863 13.919a.8.8 0 0 1-.644.025a.8.8 0 0 1-.279-.183L4.816 9.063l-2.232 1.703a.54.54 0 0 1-.691-.031l-.716-.655a.546.546 0 0 1 0-.805L3.112 7.5L1.177 5.725a.546.546 0 0 1 0-.805l.716-.655a.54.54 0 0 1 .691-.031l2.232 1.703L9.94 1.239a.805.805 0 0 1 .923-.159l2.677 1.295c.281.136.46.422.46.736V8h-3.248V4.534L6.864 7.5l3.888 2.966V8H14v3.889c0 .314-.179.6-.46.736z"
                  />
                </svg>
                <span>Open in VS Code</span>
              </a>
              <a href={npmUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M1.5 0h21v24h-10.5v-19.5h-5.25v19.5h-5.25z" />
                </svg>
                <span>npm package</span>
              </a>
            </div>
          </header>

          <main className="content-shell">
            <section className="widget-frame" aria-label="Interactive Next.js Event Gallery">
              <h2 className="sr-only">Live Event Photo Gallery Component</h2>
              <QratiConnect
                organizationId={ORGANIZATION_ID}
                theme={theme}
                router="hash"
              />
            </section>

            {/* SEO Features Section */}
            <section className="seo-section" aria-labelledby="features-heading">
              <div className="seo-section-header">
                <span className="seo-kicker">Event Gallery Features</span>
                <h2 id="features-heading">Why Developers Choose Qrati Connect</h2>
                <p>
                  Deliver an engaging live event photo wall and user-generated content (UGC)
                  experience embedded directly into your Next.js application with zero backend overhead.
                </p>
              </div>

              <div className="seo-features-grid">
                <article className="seo-feature-card">
                  <div className="seo-feature-icon" aria-hidden="true">
                    🖼️
                  </div>
                  <h3>Live Event Photo Wall</h3>
                  <p>
                    Responsive masonry grid layout, blurhash loading placeholders, and full-screen
                    lightbox with keyboard navigation for stunning visual presentation.
                  </p>
                </article>

                <article className="seo-feature-card">
                  <div className="seo-feature-icon" aria-hidden="true">
                    ☁️
                  </div>
                  <h3>Custom Cloud Storage</h3>
                  <p>
                    Connect your own AWS S3 or Cloudflare R2 bucket. Guest uploads stream directly from the browser to your bucket via presigned PUT URLs with configured CORS.
                  </p>
                </article>

                <article className="seo-feature-card">
                  <div className="seo-feature-icon" aria-hidden="true">
                    📸
                  </div>
                  <h3>Guest Media Uploads</h3>
                  <p>
                    Frictionless guest uploads via QR code or direct upload with client-side image
                    compression and automatic HEIC to JPEG conversion.
                  </p>
                </article>

                <article className="seo-feature-card">
                  <div className="seo-feature-icon" aria-hidden="true">
                    ⭐
                  </div>
                  <h3>Reactions & Contests</h3>
                  <p>
                    Boost attendee engagement with interactive emoji reactions, community star ratings,
                    and real-time contest leaderboard rankings.
                  </p>
                </article>

                <article className="seo-feature-card">
                  <div className="seo-feature-icon" aria-hidden="true">
                    ⚡
                  </div>
                  <h3>Drop-in Next.js SDK</h3>
                  <p>
                    Native React component with typed props, host theme synchronization (light and dark),
                    and seamless hash or memory routing.
                  </p>
                </article>
              </div>
            </section>

            {/* SEO Quickstart Section */}
            <section className="seo-section" aria-labelledby="quickstart-heading">
              <div className="seo-section-header">
                <span className="seo-kicker">Developer Integration</span>
                <h2 id="quickstart-heading">Embed in 3 Simple Steps</h2>
                <p>
                  Install the package, import the component, and pass your organization ID.
                </p>
              </div>

              <div className="seo-quickstart-card">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                  </div>
                  <span>EventGallery.tsx</span>
                </div>
                <pre>
                  <code>
{`'use client';

// 1. Install via pnpm or npm
// pnpm add @qratilabs/qrati-connect

// 2. Import component in your Next.js application
import QratiConnect from '@qratilabs/qrati-connect';

// 3. Render inside your page layout
export function EventGallery() {
  return (
    <QratiConnect
      organizationId="your-organization-id"
      theme="light" // 'light' | 'dark'
      router="hash" // 'hash' | 'memory'
    />
  );
}`}
                  </code>
                </pre>
              </div>
            </section>

            {/* SEO FAQ Section */}
            <section className="seo-section" aria-labelledby="faq-heading">
              <div className="seo-section-header">
                <span className="seo-kicker">Common Questions</span>
                <h2 id="faq-heading">Frequently Asked Questions</h2>
                <p>
                  Everything you need to know about embedding an event photo gallery in Next.js.
                </p>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">
                    <span>How do I embed an event photo gallery in Next.js?</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    Install <code style={{ color: 'var(--brand-accent)' }}>@qratilabs/qrati-connect</code> using pnpm or npm, then import <code style={{ color: 'var(--brand-accent)' }}>QratiConnect</code> and render it inside a Client Component with your organization ID. It handles masonry layouts, responsive image loading, and lightbox interactions out of the box.
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>How does Custom Cloud Storage work with Qrati Connect?</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    Organizations can connect their own AWS S3 or Cloudflare R2 bucket on the Qrati backend. Uploads are negotiated with presigned PUT URLs, so attendees upload photos directly to your cloud bucket without proxying through your Next.js server or consuming host bandwidth.
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Can event attendees upload photos directly through the Next.js gallery?</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    Yes. When media uploads are enabled in your Qrati organization settings, attendees can upload photos and videos directly from mobile or desktop devices with client-side image compression and automatic HEIC conversion.
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Does the Qrati Connect Next.js component support dark mode?</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    Yes. The component accepts a <code style={{ color: 'var(--brand-accent)' }}>theme</code> prop (<code style={{ color: 'var(--brand-accent)' }}>&apos;light&apos;</code> or <code style={{ color: 'var(--brand-accent)' }}>&apos;dark&apos;</code>), enabling seamless synchronization with your application&apos;s theme provider or system color preferences.
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Can I run photo contests and display rankings in the Next.js gallery?</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    Yes. Qrati Connect supports contest mode, star ratings, emoji reactions, and ranked leaderboards configured directly from your Qrati organization dashboard.
                  </div>
                </details>
              </div>
            </section>

            {/* Event Hosting & Integration CTA Section */}
            <section className="seo-section seo-cta-section" aria-labelledby="cta-heading">
              <div className="seo-cta-card">
                <span className="seo-kicker">Host Your Event Today</span>
                <h2 id="cta-heading">Ready to Embed Live Photos in Your Application?</h2>
                <p>
                  Create an account on Qrati, set up your event or organization, and start collecting
                  stunning live photos from attendees with simple drop-in code.
                </p>
                <div className="seo-cta-buttons">
                  <a
                    href="https://qrati.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="seo-btn-primary"
                  >
                    <span>Get Started Free on Qrati</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="seo-btn-secondary"
                  >
                    <span>Read SDK Documentation</span>
                  </a>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer">
            <p>
              Powered by{' '}
              <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">
                Qrati
              </a>{' '}
              · Embeddable live event photo galleries for Next.js applications.
            </p>
            <div className="footer-links">
              <a href="https://qrati.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <span className="footer-sep" aria-hidden="true">
                ·
              </span>
              <a href="https://qrati.com/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
              <span className="footer-sep" aria-hidden="true">
                ·
              </span>
              <button
                type="button"
                className="footer-cookie-btn"
                onClick={handleCookiePreferences}
              >
                Cookie Preferences
              </button>
            </div>
            <p className="footer-copyright">
              © {year} Qrati Labs. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
