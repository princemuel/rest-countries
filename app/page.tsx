import { CountriesProvider, ImagesProvider } from '@/context';
import { request } from '@/helpers';
import { blurDataUrls } from '@/lib';
import HomepageTemplate from './home';

const url = `
  ${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/all?fields=name,population,region,capital,cca3,tld
`;

async function PageRoute() {
  const imageResponse: CountryType[] = await fetch(
    `${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/all?fields=flags,cca3`
  ).then((response) => response.json());

  const images = (imageResponse || []).map((response) => ({
    tag: response?.cca3,
    url: response?.flags?.svg,
    alt: response?.flags?.alt,
    blurredDataUrl: '',
  }));

  return (
    <CountriesProvider promise={request(url)}>
      <ImagesProvider promise={blurDataUrls(images)}>
        <HomepageTemplate />
      </ImagesProvider>
    </CountriesProvider>
  );
}

export default PageRoute;
