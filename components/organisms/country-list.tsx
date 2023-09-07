'use client';

import { useFilterState, useImages } from '@/context';
import * as React from 'react';
import { CountryCard } from '../molecules';

const CountriesList = () => {
  // unwrap the promise
  const imagesPromise = useImages();
  const images = React.use(imagesPromise);

  const state = useFilterState();

  //TODO! refactor this later to use a state selector
  const sorted = React.useMemo(() => {
    return (
      state.filtered.sort((countryA, countryB) => {
        const a = countryA.cca3.toLowerCase();
        const b = countryB.cca3.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
      }) ?? []
    );
  }, [state.filtered]);

  // const map = new Map();
  // sorted.forEach((item) => map.set(item.cca3, item));
  // (images ?? []).forEach((item) =>
  //   map.set(item.tag, { ...map.get(item.tag), ...item })
  // );
  // const mergedArr = Array.from(map.values());

  // console.log(JSON.stringify(mergedArr[0]));

  return (
    <div className='grid gap-8 grid-cols-auto md:gap-8'>
      {sorted.map((country) => {
        const flag = (images ?? []).filter(
          (image) => image.cca3 === country.cca3
        )[0];

        return (
          <CountryCard
            key={country?.name?.common}
            country={country}
            flag={flag}
          />
        );
      })}
    </div>
  );
};
export { CountriesList };
