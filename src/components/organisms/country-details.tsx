import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, hasValues } from "../../lib";
import { Text } from "../atoms";

interface Props {
  country: CountryType;
  borders: {
    name: string;
    code: string;
  }[];
  id: string;
}

async function fetchCountryById(id = "") {
  const response = await fetch(`${BASE_URL}/alpha/${id}`);
  const country: CountryType = await response.json();

  const codes = country?.borders || [];

  console.log(codes);

  const borders = await Promise.all(
    codes.map(async (code) => {
      const response = await fetch(`${BASE_URL}/alpha/${code}`);
      const data = (await response.json()) as CountryType;
      return { name: data?.name, code: data?.cca3 };
    })
  );

  return { borders, country };
}

const CountryDetails = ({ country, borders }: Props) => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["countries", id],
    queryFn: () => fetchCountryById(id),
  });

  console.log(data);

  // const currencies = country?.currencies;
  // const languages = country?.languages;

  return (
    <div className='flex flex-col gap-20 lg:flex-row lg:gap-40'>
      <figure className='w-full overflow-hidden shadow-md lg:w-2/5'>
        <img
          src={country?.flags?.svg}
          alt={country?.name?.official}
          className='rounded-xl object-cover shadow-md'
        />
      </figure>

      <div className='flex w-full flex-col gap-20 lg:w-3/5 lg:self-center'>
        <Text
          variant='h3'
          id='country-name'
          className='text-3xl font-extrabold lg:text-5xl'
        >
          {country?.name?.official}
        </Text>

        <div className='flex flex-col items-start gap-12 lg:flex-row lg:gap-28 xl:gap-40'>
          <div className='space-y-6'>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Native Name:</span>
              <span className='font-light'>
                {/* {Object.keys(country?.name?.nativeName || {})[0]} */}
              </span>
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Population:</span>
              <span className='font-light'>
                {(country?.population).toLocaleString("en-US")}
              </span>
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Region:</span>
              <span className='font-light'>{country?.region}</span>
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Sub Region:</span>
              <span className='font-light'>{country?.subregion}</span>
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Capital:</span>
              <span className='font-light'>{country?.capital || "None"}</span>
            </Text>
          </div>

          <div className='flex flex-col gap-6'>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Top Level Domain:</span>
              <span className='font-light'>{country?.tld?.[0]}</span>
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Currencies:</span>
              {/* {hasValues(currencies) ? (
                currencies?.map((currency) => {
                  return (
                    <Text
                      key={currency?.code}
                      variant='span'
                      className='font-light'
                    >
                      {currency.name}
                    </Text>
                  );
                })
              ) : (
                <span className='font-light'>None</span>
              )} */}
            </Text>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <span className='font-semibold'>Languages:</span>
              {/* <span className='font-light'>
                {hasValues(languages)
                  ? languages.map(({ name }) => name).join(", ")
                  : "None"}
              </span> */}
            </Text>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <span className='font-semibold leading-[1.6rem]'>
            Border Countries:
          </span>

          <div className='inline-flex flex-wrap items-end gap-4'>
            {hasValues(borders) ? (
              borders.map((border) => {
                return (
                  <Link
                    key={border?.code}
                    to={`/countries/${border?.code}`}
                    className='flex-1 rounded bg-neutral-100 px-8 py-2 text-center text-base capitalize shadow-pill dark:bg-primary-500'
                  >
                    {border?.name}
                  </Link>
                );
              })
            ) : (
              <span className='font-light'>None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetails };
