import { useCountriesState } from '../../context';
import { hasValues } from '../../utils';
import { Card } from '../molecules';

type Props = {};

const CountriesList = (props: Props) => {
  const state = useCountriesState();

  const filteredCountries =
    state?.filter !== 'All'
      ? state?.countries?.filter((country) =>
          new RegExp(`${state?.filter}`, 'ig').test(country.region)
        )
      : state?.search
      ? state?.countries?.filter((country) =>
          new RegExp(`${state?.search}`, 'ig').test(country.name)
        )
      : state?.countries;

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] justify-items-center gap-24'>
      {hasValues(filteredCountries) &&
        filteredCountries.map((country) => (
          <Card key={country?.alpha3Code} country={country} />
        ))}
    </div>
  );
};

export default CountriesList;
