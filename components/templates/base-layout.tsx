import * as React from 'react';
import { Header } from '../organisms';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />

      {children}
    </React.Fragment>
  );
};

export { BaseLayout };
