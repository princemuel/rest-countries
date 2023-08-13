import { CountriesList } from '@/components';

const HomepageTemplate = () => {
  return (
    <main className='flex flex-col gap-20'>
      <section className='h-container'></section>

      <section className='h-container'>
        <CountriesList />
      </section>
    </main>
  );
};

export default HomepageTemplate;
