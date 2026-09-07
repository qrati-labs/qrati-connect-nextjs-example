import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/connect/nextjs-example',
};

export default nextConfig;
