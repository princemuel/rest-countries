import { useParams } from "react-router-dom";
import { BackBtn } from "../atoms";
import { CountryDetails } from "../organisms";

const CountryTemplate = () => {
  const { id } = useParams();

  return (
    <>
      <section className='my-20 h-container'>
        <BackBtn />
      </section>

      <section className='my-20 h-container'>
        <CountryDetails countryId={id} />
      </section>
    </>
  );
};

export { CountryTemplate };
