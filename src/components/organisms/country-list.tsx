interface Props {}

const CountriesList = (props: Props) => {
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
      {/* <Card key={country?.cca3} country={country} /> */}
    </div>
  );
};

export { CountriesList };
