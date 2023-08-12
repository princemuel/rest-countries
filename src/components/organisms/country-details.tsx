import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { hasValues } from "../../lib";
import { Text } from "../atoms";

interface BorderResponse {
  borders: {
    name: CountryType["name"];
    code: string;
  }[];
}

// async function fetchCountryById(id?: string): Promise<CountryType> {
//   if (typeof id === "undefined") return Promise.reject(new Error("Invalid id"));

//   const response = await fetch(`${BASE_URL}/alpha/${id}`);
//   const data = await response.json();

//   return data[0];
// }

// async function fetchCountryBorders(
//   country?: CountryType
// ): Promise<BorderResponse["borders"]> {
//   const codes = country?.borders || [];

//   return Promise.all(
//     codes.map(async (code) => {
//       const response = await fetch(`${BASE_URL}/alpha/${code}`);
//       const data = await response.json();
//       const country: CountryType = data[0];
//       return { name: country?.name, code: country?.cca3 };
//     })
//   );
// }

interface Props {
  countryId?: string;
}

const CountryDetails = ({ countryId }: Props) => {
  const queryClient = useQueryClient();

  const { data } = useQuery<CountryType[]>({
    queryKey: [`alpha/${countryId}`],
    enabled: Boolean(countryId),
    // staleTime: 30 * 1000,
    // initialData: () =>
    //   queryClient
    //     .getQueryData(["all"])
    //     ?.find((country) => country.cca2 === countryId),
    // initialDataUpdatedAt: () =>
    //   queryClient.getQueryState(["all"])?.dataUpdatedAt,
  });

  const country = data?.[0];

  const borderQueries = useQueries({
    queries: (country?.borders || []).map((code) => {
      return {
        queryKey: [`alpha/${code}`],
        enabled: Boolean(country?.cca2),
        // queryFn: () => fetchUserById(user.id),
        select: (data: CountryType[]) => {
          const border = data[0];
          return { name: border?.name?.common, code: border?.cca2 };
        },
      };
    }),
  });

  const borders =
    borderQueries.flatMap(({ data }) => data || { name: "", code: "" }) || [];

  // const country = data?.country;
  // const borders = data?.borders;

  // const currencies = country?.currencies;
  // const languages = country?.languages;

  return (
    <div
      className='flex flex-col gap-20 lg:flex-row lg:gap-40'
      aria-labelledby={country?.name?.official}
    >
      <figure className='w-full overflow-hidden shadow-md lg:w-2/5'>
        <img
          src={country?.flags.svg}
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
          {country?.name?.common}
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
                {(country?.population || 0).toLocaleString("en-US")}
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
