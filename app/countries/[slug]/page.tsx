import { CountryProvider } from '@/context';
import { request } from '@/helpers';
import type { Metadata } from 'next';
import CountryDetailsTemplate from './country';

interface Props {
  params: IParams;
}

async function PageRoute({ params: { slug } }: Props) {
  const url = `${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/alpha/${slug}`;

  const response = request(url);

  return (
    <CountryProvider promise={response}>
      <CountryDetailsTemplate />
    </CountryProvider>
  );
}

export default PageRoute;

export async function generateStaticParams() {
  const url = `
    ${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/all?fields=name,flags,population,region,capital,cca3,tld
  `;

  const countries: CountryType[] = await request(url);

  return (countries || []).map((country) => ({ slug: country?.cca3 }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/alpha/${slug}`;

  const response = await request(url);

  const country: CountryType = response[0];

  if (!country)
    return {
      title: 'Country Not Found',
      description: 'The requested resource does not exist',
    };

  const title = `${country?.name?.common} `;

  return {
    title: title,
    description: country?.flags?.alt,
    icons: [
      country?.flags.svg,
      { rel: 'icon', url: country?.flags?.png },
      { rel: 'apple-touch-icon', url: country?.flags?.png },
    ],
    openGraph: {
      type: 'article',
      title: title,
      description: country?.flags?.alt,
      authors: [
        'Rest Countries',
        'https://restcountries.com/',
        'Prince Muel',
        'https://princemuel.vercel.app/',
      ],
      publishedTime: new Date('2023-08-12').toISOString(),
      images: country?.flags?.png,
    },
    twitter: {
      title: title,
      description: country?.flags?.alt,
      images: [country?.flags?.png, country?.flags?.svg],
    },
  };
}
