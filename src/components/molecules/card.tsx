import { Link } from 'react-router-dom';
import type { ICountry } from '../../@types';
import { Text } from '../atoms';

type Props = {
  country: ICountry;
};

const Card = ({ country }: Props) => {
  return (
    <article key={country.alpha3Code} className='h-full'>
      <Link
        to={`/countries/${country?.alpha3Code}`}
        className='flex h-full max-w-md cursor-pointer flex-col overflow-hidden rounded-lg shadow-card'
      >
        <figure className='flex-1 overflow-hidden'>
          <img
            src={country?.flags?.svg}
            alt={country?.name}
            className='h-full w-full object-cover'
          />
        </figure>

        <div className='flex-1 bg-neutral-100 py-8 px-10 dark:bg-primary-500'>
          <Text
            as='h3'
            className='mt-4 mb-6 text-[1.8rem] font-extrabold leading-[2.6rem]'
          >
            {country?.name}
          </Text>

          <div className='> * + * space-y-4'>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text as='span' className='font-semibold'>
                Population:
              </Text>
              <Text as='span' className='font-light'>
                {(country?.population).toLocaleString('en-US')}
              </Text>
            </Text>

            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text as='span' className='font-semibold'>
                Region:
              </Text>
              <Text as='span' className='font-light'>
                {country?.region}
              </Text>
            </Text>

            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text as='span' className='font-semibold'>
                Capital:
              </Text>
              <Text as='span' className='font-light'>
                {country?.capital || ''}
              </Text>
            </Text>
          </div>
        </div>
      </Link>
    </article>
  );
};

export { Card };
