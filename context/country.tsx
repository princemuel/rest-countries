'use client';

import * as React from 'react';

const CountryContext = React.createContext<Promise<CountryType[]> | null>(null);

interface Props {
  children: React.ReactNode;
  promise: Promise<CountryType[]>;
}

export const CountryProvider = ({ children, promise }: Props) => {
  return (
    <CountryContext.Provider value={promise}>
      {children}
    </CountryContext.Provider>
  );
};

export function useCountry() {
  const context = React.useContext(CountryContext);
  if (context == null)
    throw new Error(
      'The `useCountry` hook must be used in a `CountryProvider`'
    );

  return context;
}
