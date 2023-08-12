import { BackBtn } from "../atoms";

interface Props {
  country: CountryType;
  borders: {
    name: string;
    code: string;
  }[];
}

const CountryTemplate = (props: Props) => {
  return (
    <>
      <section className='my-20 h-container'>
        <BackBtn />
      </section>

      <section
        className='my-20 h-container'
        // aria-labelledby={country?.name?.official}
      >
        {/* <CountryDetails country={country} borders={borders} id='' /> */}
      </section>
    </>
  );
};

export { CountryTemplate };
