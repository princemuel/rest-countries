import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { HomeTemplate } from "../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Helmet>
        <meta property='og:title' content='Countries of the World' />
        <title>Countries of the World</title>
        <meta
          name='og:description'
          content='An appplication displaying a list of all countries in the world and relevant details about them'
        />
        <meta
          name='description'
          content='An appplication displaying a list of all countries in the world and relevant details about them'
        />
      </Helmet>

      <main className='text-[1.4rem]'>
        <HomeTemplate />
      </main>
    </Fragment>
  );
};

export { Home };
// export { loader as homeLoader };

// async function loader() {
//   const countries = await getCountries();
//   const regions = await getRegions();

//   return { data: countries || [], regions };
// }
