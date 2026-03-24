'use client';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useEffect } from 'react';

import { EXAMPLE_ORG_ID, QRATI_SCRIPT_URL } from './config';

type QratiConnectAttributes = DetailedHTMLProps<
    HTMLAttributes<HTMLElement> & {
        'organization-id'?: string;
        theme?: 'light' | 'dark';
        router?: 'memory' | 'hash';
        uid?: string;
        fname?: string;
        lname?: string;
    },
    HTMLElement
>;

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'qrati-connect': QratiConnectAttributes;
        }
    }
}

export default function QratiWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = QRATI_SCRIPT_URL;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <qrati-connect organization-id={EXAMPLE_ORG_ID} theme='light' router='hash' />;
}
