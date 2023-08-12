import { useQuery } from "@tanstack/react-query";
import { Card } from "../molecules";

interface Props {}

const CountriesList = (props: Props) => {
  const { isLoading, error, data } = useQuery<CountryType[]>({
    queryKey: ["all"],
  });

  const countries = data || [];
  // const state = useCountriesState();

  // const isSearching = Boolean(state.search);

  // memoize this later
  // const filteredCountries =
  //   state?.filter !== "All"
  //     ? state?.countries?.filter((country) =>
  //         new RegExp(`${state?.filter}`, "ig").test(country.region)
  //       )
  //     : state?.countries;

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] justify-items-center gap-24'>
      {countries.map((country) => {
        return <Card key={`${country?.cca3}-CARD`} country={country} />;
      })}
    </div>
  );
};

export { CountriesList };
