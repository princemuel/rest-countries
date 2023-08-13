'use client';

import * as React from 'react';

const ImageContext = React.createContext<Promise<string> | null>(null);

interface Props {
  children: React.ReactNode;
  promise: Promise<string>;
}

export const ImageProvider = ({ children, promise }: Props) => {
  return (
    <ImageContext.Provider value={promise}>{children}</ImageContext.Provider>
  );
};

export function useImage() {
  const context = React.useContext(ImageContext);
  if (context == null)
    throw new Error('The `useImage` hook must be used in a `ImageProvider`');

  return context;
}
