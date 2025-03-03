import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!mockServiceWorker.js|FAQ|.*\\.svg).*)',
        destination: '/FAQ', // /FAQ 페이지로 리다이렉트
        permanent: false // 307
      }
    ];
  }
};

export default nextConfig;
