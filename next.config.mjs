//@ts-check
import withPlaiceholder from '@plaiceholder/next';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack(config, { isServer }) {
    if (!isServer) config.resolve.fallback.fs = false;

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(process.cwd(), 'public', 'leaflet', 'images'),
          },
        ],
      })
    );
    return config;
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
