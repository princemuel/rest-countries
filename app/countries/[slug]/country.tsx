import { CountryDetails } from '@/components';

const CountryDetailsTemplate = () => {
  return (
    <main className='flex flex-col gap-20'>
      <section className='h-container'></section>

      <section className='h-container'>
        <CountryDetails />
      </section>
    </main>
  );
};

export default CountryDetailsTemplate;
