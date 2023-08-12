import { CountriesList } from "../organisms";

interface Props {}

const HomeTemplate = (props: Props) => {
  return (
    <>
      <section className='h-container'>{/* <Filters /> */}</section>

      <section className='my-20 h-container'>
        <CountriesList />
      </section>
    </>
  );
};

export { HomeTemplate };
