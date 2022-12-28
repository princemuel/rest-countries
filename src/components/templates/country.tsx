import { Fragment } from 'react';
import { ICountry } from '../../@types';
import { BackBtn } from '../atoms';
import { CountryDetails } from '../organisms';

type Props = {
  country: ICountry;
  borders: {
    name: string;
    code: string;
  }[];
};

const CountryTemplate = ({ country, borders }: Props) => {
  return (
    <Fragment>
      <section className='my-20 h-container'>
        <BackBtn />
      </section>

      <section className='my-20 h-container' aria-labelledby={country?.name}>
        <CountryDetails country={country} borders={borders} />
      </section>
    </Fragment>
  );
};

export { CountryTemplate };
