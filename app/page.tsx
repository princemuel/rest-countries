import { CountriesProvider } from '@/context';
import { request } from '@/helpers';
import HomepageTemplate from './home';

const url = `
  ${process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL}/all?fields=name,flags,population,region,capital,cca3,tld
`;

async function PageRoute() {
  const response = request(url);

  return (
    <CountriesProvider promise={response}>
      <HomepageTemplate />
    </CountriesProvider>
  );
}

export default PageRoute;
