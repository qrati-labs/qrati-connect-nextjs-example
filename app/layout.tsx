import './globals.css';
import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import CookieConsentBanner from './components/CookieConsentBanner';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GTM_ENABLED = Boolean(GTM_ID && GTM_ID !== '__GTM_ID__');

export const metadata: Metadata = {
  metadataBase: new URL('https://qrati.com'),
  title: 'Embeddable Event Photo Gallery Next.js Component | Qrati Connect',
  description:
    'Embed a live, interactive event photo gallery in Next.js with guest uploads, lightbox, emoji reactions, and contest leaderboards using @qratilabs/qrati-connect.',
  keywords: [
    'embeddable event photo gallery',
    'nextjs photo gallery component',
    'live event photo wall',
    'guest photo uploads',
    'nextjs ugc gallery',
    'event photo sharing widget',
    'photo contest leaderboard',
    'qrati connect nextjs',
    '@qratilabs/qrati-connect',
  ],
  authors: [{ name: 'Qrati Labs', url: 'https://qrati.com' }],
  applicationName: 'Qrati Connect Next.js',
  alternates: {
    canonical: 'https://qrati.com/connect/nextjs-example',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/connect/nextjs-example/qrati-logo-square.svg',
    apple: '/connect/nextjs-example/qrati-connect-logo-square.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Qrati Connect',
    url: 'https://qrati.com/connect/nextjs-example',
    title: 'Embeddable Event Photo Gallery Next.js Component | Qrati Connect',
    description:
      'Embed a live, interactive event photo gallery in Next.js with guest uploads, lightbox, emoji reactions, and contest leaderboards using @qratilabs/qrati-connect.',
    images: [
      {
        url: 'https://qrati.com/connect/nextjs-example/qrati-connect-og.png',
        width: 1200,
        height: 630,
        alt: 'Qrati Connect Next.js Component — Live Event Photo Gallery Embed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@qratilabs',
    creator: '@qratilabs',
    title: 'Embeddable Event Photo Gallery Next.js Component | Qrati Connect',
    description:
      'Embed a live, interactive event photo gallery in Next.js with guest uploads, lightbox, emoji reactions, and contest leaderboards using @qratilabs/qrati-connect.',
    images: ['https://qrati.com/connect/nextjs-example/qrati-connect-og.png'],
  },
  other: {
    'theme-color': '#ff4800',
    'msapplication-TileColor': '#ff4800',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Qrati Connect',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://qrati.com/#organization',
      name: 'Qrati Labs, LLC',
      url: 'https://qrati.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://qrati.com/connect/nextjs-example/qrati-connect-logo-square.png',
        width: 128,
        height: 128,
      },
      sameAs: [
        'https://github.com/qrati-labs',
        'https://www.linkedin.com/company/qrati',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://qrati.com/#website',
      url: 'https://qrati.com/',
      name: 'Qrati',
      publisher: { '@id': 'https://qrati.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://qrati.com/connect/nextjs-example#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://qrati.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Connect',
          item: 'https://qrati.com/connect',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Next.js Example',
          item: 'https://qrati.com/connect/nextjs-example',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://qrati.com/connect/nextjs-example#webpage',
      url: 'https://qrati.com/connect/nextjs-example',
      name: 'Embeddable Event Photo Gallery Next.js Component | Qrati Connect',
      description:
        'Embed a live, interactive event photo gallery in Next.js with guest uploads, lightbox, emoji reactions, and contest leaderboards using @qratilabs/qrati-connect.',
      isPartOf: { '@id': 'https://qrati.com/#website' },
      breadcrumb: { '@id': 'https://qrati.com/connect/nextjs-example#breadcrumb' },
      about: { '@id': 'https://qrati.com/connect/nextjs-example#software' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://qrati.com/connect/nextjs-example/qrati-connect-og.png',
        width: 1200,
        height: 630,
      },
      inLanguage: 'en',
    },
    {
      '@type': ['SoftwareApplication', 'SoftwareSourceCode'],
      '@id': 'https://qrati.com/connect/nextjs-example#software',
      name: 'Qrati Connect Next.js Component',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      programmingLanguage: 'TypeScript',
      runtimePlatform: 'Next.js 14, Next.js 15, Next.js 16, React 19',
      codeRepository: 'https://github.com/qrati-labs/qrati-connect-nextjs-example',
      downloadUrl: 'https://www.npmjs.com/package/@qratilabs/qrati-connect',
      url: 'https://qrati.com/connect/nextjs-example',
      description:
        'A drop-in Next.js / React component for embedding live event photo galleries, guest media uploads, emoji reactions, and contest leaderboards.',
      publisher: { '@id': 'https://qrati.com/#organization' },
      featureList: [
        'Drop-in Next.js gallery component',
        'Direct guest photo and video uploads',
        'Client-side image compression and HEIC conversion',
        'Full-screen responsive lightbox',
        'Emoji reactions with real-time feedback',
        'Contest leaderboards and star ratings',
        'Host-controlled theme synchronization (light/dark)',
        'TypeScript declarations and typed props',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://qrati.com/connect/nextjs-example#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I embed an event photo gallery in Next.js?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Install @qratilabs/qrati-connect and import QratiConnect. Render <QratiConnect organizationId="YOUR_ORG_ID" theme="light" router="hash" /> in a Client Component to drop a responsive event gallery into your Next.js application.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can event attendees upload photos directly through the Next.js gallery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When media uploads are enabled in your Qrati organization settings, attendees can upload photos and videos directly from mobile or desktop with optional client-side compression and HEIC conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Qrati Connect Next.js component support dark mode?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. The QratiConnect component accepts a theme prop ('light' or 'dark') allowing seamless synchronization with your application's theme state or system color scheme.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I run photo contests and display rankings in the Next.js gallery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Qrati Connect supports contest mode, star ratings, emoji reactions, and ranked leaderboards configured directly from your Qrati organization.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.qrati.com" />
        <link rel="dns-prefetch" href="https://api.qrati.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem('qc-theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', t);
                document.documentElement.classList.toggle('dark', t === 'dark');
              } catch (e) {}
            })();`,
          }}
        />
        {/* Consent Mode v2 defaults must be pushed before the GTM/gtag script parses below. */}
        {GTM_ENABLED && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}' +
                "gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});" +
                "gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',region:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'],wait_for_update:500});",
            }}
          />
        )}
      </head>
      {GTM_ENABLED && <GoogleTagManager gtmId={GTM_ID as string} />}
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
