import { useCountriesState } from '../../lib';
import { Card } from '../molecules';

interface Props {}

const CountriesList = (props: Props) => {
  const state = useCountriesState();

  const isSearching = Boolean(state.search);

  const filteredCountries =
    state?.filter !== 'All'
      ? state?.countries?.filter((country) =>
          new RegExp(`${state?.filter}`, 'ig').test(country.region)
        )
      : state?.countries;

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] justify-items-center gap-24'>
      {isSearching
        ? filteredCountries
            .filter((country) =>
              new RegExp(`${state?.search}`, 'ig').test(country.name)
            )
            .map((country) => (
              <Card key={country?.alpha3Code} country={country} />
            ))
        : filteredCountries.map((country) => (
            <Card key={country?.alpha3Code} country={country} />
          ))}
    </div>
  );
};

export { CountriesList };
