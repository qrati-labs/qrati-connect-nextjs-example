import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Qrati Connect — Next.js Example',
    description: 'Embed Qrati Connect in a Next.js app using the React component.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
