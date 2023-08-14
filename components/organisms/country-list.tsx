'use client';

import { useCountries, useImages } from '@/context';
import * as React from 'react';
import { CountryCard } from '../molecules';

const CountriesList = () => {
  const countriesPromise = useCountries();
  const imagesPromise = useImages();

  // unwrap the promises
  const countries = React.use(countriesPromise);
  const images = React.use(imagesPromise);

  return (
    <div className='grid gap-8 grid-cols-auto md:gap-8'>
      {countries.map((country) => {
        const flag = images.filter((image) => image.tag === country.cca3)[0];

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
