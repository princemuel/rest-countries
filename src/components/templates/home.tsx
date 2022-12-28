import { Fragment } from 'react';
import { Filters } from '../organisms';
import CountriesList from '../organisms/countries';

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <Fragment>
      <section className='h-container'>
        <Filters />
      </section>

      <section className='my-20 h-container'>
        <CountriesList />
      </section>
    </Fragment>
  );
};

export { HomeTemplate };
