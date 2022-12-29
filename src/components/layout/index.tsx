import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';

type Props = {};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export { Layout };
