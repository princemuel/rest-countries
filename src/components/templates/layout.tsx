import { Outlet } from "react-router-dom";
import { Header } from "../organisms";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
