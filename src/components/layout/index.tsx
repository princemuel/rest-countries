import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';

type Props = {};

const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export { Layout };
