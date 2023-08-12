import { useLoaderData } from "react-router-dom";
import { ICountry } from "../@types";
import { CountryTemplate } from "../components";
import { fetcher } from "../lib";
import { hasValues } from "../lib/utils";

type Props = {};

const Country = (props: Props) => {
  const { country, borders } = useLoaderData() as {
    country: ICountry;
    borders: {
      name: string;
      code: string;
    }[];
  };

  return (
    <main className='text-[1.6rem]'>
      <CountryTemplate country={country} borders={borders} />
    </main>
  );
};

export { Country, loader as countryLoader };

// @ts-expect-error
async function loader({ params }) {
  const response = await fetcher(`/alpha/${params?.id}`);
  const country = response.data as ICountry;
  const codes = country.borders;
  const borders = hasValues(codes)
    ? await Promise.all(
        codes?.map(async (code) => {
          const response = await fetcher(`/alpha/${code}`);
          const data = response.data as ICountry;
          return { name: data.name, code: data.alpha3Code };
        }) || []
      )
    : [];
  return {
    country,
    borders,
  };
}
