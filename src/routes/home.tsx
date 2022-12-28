import { HomeTemplate } from '../components';
import { getCountries, getRegions } from '../lib';

type Props = {};

const Home = (props: Props) => {
  return (
    <main className='text-[1.4rem]'>
      <HomeTemplate />
    </main>
  );
};

export { Home };
export { loader as homeLoader };

async function loader() {
  const countries = await getCountries();
  const regions = await getRegions();

  return { data: countries || [], regions };
}
