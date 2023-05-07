import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../organisms';

interface Props {}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export { Layout };
