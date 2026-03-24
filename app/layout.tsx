import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import type { Metadata } from 'next';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Qrati Connect — Next.js Example',
    description: 'Embed a real-time event discovery widget in any Next.js app with Qrati Connect.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
