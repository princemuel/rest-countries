import type { Metadata } from 'next';
import { getBaseUrl } from './baseurl';

type MetaFunction = (data?: Metadata) => Metadata;

export const defineMeta: MetaFunction = (metadata) => {
  const title: Metadata['title'] = 'REST World Countries';
  const description: Metadata['description'] =
    'An appplication displaying a list of all countries in the world and relevant details about them';

  return {
    title: {
      default: title,
      template: '%s - REST Countries',
    },
    description: description,

    metadataBase: new URL('/', getBaseUrl()),

    generator: 'Next.js',
    applicationName: 'Countries of the World',
    referrer: 'origin-when-cross-origin',
    manifest: '/site.webmanifest',
    keywords: ['Countries', 'World', 'Continents', 'Where in the world'],

    creator: 'Prince Muel',
    publisher: 'Prince Muel',
    authors: [{ name: 'Prince Muel', url: 'https://github.com/princemuel' }],
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        bing: 'msvalidate.01=0',
        me: ['vansomecsam@gmail.com', 'my-link'],
      },
    },

    icons: {
      icon: [
        {
          rel: 'icon',
          url: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      shortcut: ['/shortcut-icon.png'],
      other: [
        {
          rel: 'android-chrome-192x192',
          url: '/android-chrome-192x192.png',
        },
        {
          rel: 'android-chrome-512x512',
          url: '/android-chrome-512x512.png',
        },
      ],
    },

    openGraph: {
      type: 'website',
      url: '/',
      locale: 'en_US',
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@iamprincemuel',
      creator: '@iamprincemuel',
      title,
      description,
    },

    colorScheme: 'dark light',
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#111111' },
      { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    ],

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    ...metadata,
  };
};
