import QratiWidget from './QratiWidget';

export default function Home() {
    return (
        <div className='mx-auto max-w-4xl px-4 py-8 font-sans'>
            <header className='mb-8 text-center'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
                    Qrati Connect — Next.js Example
                </h1>
                <p className='mx-auto max-w-lg text-zinc-600 dark:text-zinc-400'>
                    A fully embeddable event discovery widget powered by{' '}
                    <a
                        href='https://qrati.com'
                        className='font-medium text-blue-600 hover:underline dark:text-blue-400'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Qrati
                    </a>
                    . Drop it into any Next.js application with a single client component.
                </p>
            </header>
            <main className='min-h-[400px]'>
                <QratiWidget />
            </main>
            <footer className='mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
                <p>
                    Built with{' '}
                    <a
                        href='https://nextjs.org'
                        className='font-medium hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Next.js
                    </a>{' '}
                    &amp;{' '}
                    <a
                        href='https://qrati.com'
                        className='font-medium hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Qrati Connect
                    </a>
                </p>
            </footer>
        </div>
    );
}
