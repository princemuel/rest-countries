import { Fragment } from 'react';
import { CountriesList, Filters } from '../organisms';

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
