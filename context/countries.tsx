'use client';

import * as React from 'react';

const CountriesContext = React.createContext<Promise<CountryType[]> | null>(
  null
);

interface Props {
  children: React.ReactNode;
  promise: Promise<CountryType[]>;
}

export const CountriesProvider = ({ children, promise }: Props) => {
  return (
    <CountriesContext.Provider value={promise}>
      {children}
    </CountriesContext.Provider>
  );
};

export function useCountries() {
  const context = React.useContext(CountriesContext);
  if (context == null)
    throw new Error(
      'The `useCountries` hook must be used in a `CountriesProvider`'
    );

  return context;
}
