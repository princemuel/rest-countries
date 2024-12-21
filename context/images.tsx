"use client";

import * as React from "react";

const ImagesContext = React.createContext<Promise<Photo[]> | null>(null);

interface Props {
  children: React.ReactNode;
  promise: Promise<Photo[]>;
}

export const ImagesProvider = ({ children, promise }: Props) => {
  return (
    <ImagesContext.Provider value={promise}>{children}</ImagesContext.Provider>
  );
};

export function useImages() {
  const context = React.useContext(ImagesContext);
  if (context == null)
    throw new Error("The `useImages` hook must be used in a `ImagesProvider`");

  return context;
}
