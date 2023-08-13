import { CountriesProvider, ImagesProvider } from '@/context';
import { blurDataUrls, getAllCountries } from '@/lib';
import HomepageTemplate from './home';

async function PageRoute() {
  const imageResponse = await getAllCountries();

  const images = (imageResponse || []).map((response) => ({
    tag: response?.cca3,
    url: response?.flags?.svg,
    alt: response?.flags?.alt,
    blurredDataUrl: '',
  }));

  return (
    <CountriesProvider promise={getAllCountries()}>
      <ImagesProvider promise={blurDataUrls(images)}>
        <HomepageTemplate />
      </ImagesProvider>
    </CountriesProvider>
  );
}

export default PageRoute;
