//@ts-check
import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // typescript: {
  //   ignoreBuildErrors: process.env.NODE_ENV === 'production',
  // },
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'https://mainfacts.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
