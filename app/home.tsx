'use client';

import { useCountries } from '@/context';
import { use } from 'react';

const HomepageTemplate = () => {
  const countriesPromise = useCountries();
  const countries = use(countriesPromise);

  console.log(countries);

  return <div>Home</div>;
};

export default HomepageTemplate;
