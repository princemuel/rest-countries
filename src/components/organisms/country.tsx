import { Link } from 'react-router-dom';
import { ICountry } from '../../@types';
import { hasValues } from '../../utils';
import { Text } from '../atoms';

type Props = {
  country: ICountry;
  borders: {
    name: string;
    code: string;
  }[];
};

const CountryDetails = ({ country, borders }: Props) => {
  const currencies = country?.currencies;
  const languages = country?.languages;

  return (
    <div className='flex flex-col gap-20 md:flex-row'>
      <figure className='overflow-hidden rounded-xl shadow-md'>
        <img
          src={country?.flags?.svg}
          alt={country?.name}
          className='object-cover'
        />
      </figure>

      <div className='flex flex-col gap-20'>
        <Text
          as='h3'
          id='country-name'
          className='text-[1.8rem] font-extrabold leading-[2.6rem]'
        >
          {country?.name}
        </Text>

        <div className='flex flex-col gap-6'>
          <Text className='flex items-center gap-2 leading-[1.6rem]'>
            <Text as='span' className='font-semibold'>
              Native Name:
            </Text>
            <Text as='span' className='font-light'>
              {country?.nativeName}
            </Text>
          </Text>
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
              Sub Region:
            </Text>
            <Text as='span' className='font-light'>
              {country?.subregion}
            </Text>
          </Text>
          <Text className='flex items-center gap-2 leading-[1.6rem]'>
            <Text as='span' className='font-semibold'>
              Capital:
            </Text>
            <Text as='span' className='font-light'>
              {country?.capital || 'None'}
            </Text>
          </Text>
        </div>

        <div className='flex flex-col gap-6'>
          <Text className='flex items-center gap-2 leading-[1.6rem]'>
            <Text as='span' className='font-semibold'>
              Top Level Domain:
            </Text>
            <Text as='span' className='font-light'>
              {country?.topLevelDomain[0]}
            </Text>
          </Text>
          <Text className='flex items-center gap-2 leading-[1.6rem]'>
            <Text as='span' className='font-semibold'>
              Currencies:
            </Text>
            {hasValues(currencies) ? (
              currencies?.map((currency) => {
                return (
                  <Text key={currency?.code} as='span' className='font-light'>
                    {currency.name}
                  </Text>
                );
              })
            ) : (
              <Text as='span' className='font-light'>
                None
              </Text>
            )}
          </Text>

          <Text className='flex items-center gap-2 leading-[1.6rem]'>
            <Text as='span' className='font-semibold'>
              Languages:
            </Text>
            <Text as='span' className='font-light'>
              {hasValues(languages)
                ? languages.map(({ name }) => name).join(', ')
                : 'None'}
            </Text>
          </Text>
        </div>

        <div className='flex flex-col gap-8'>
          <Text as='span' className='font-semibold leading-[1.6rem]'>
            Border Countries:
          </Text>

          <div className='flex flex-wrap items-end gap-4'>
            {hasValues(borders) ? (
              borders.map((border) => {
                return (
                  <Link
                    key={border?.code}
                    to={`/countries/${border?.code}`}
                    className='flex-1 rounded bg-neutral-100 px-8 py-2 text-center text-base capitalize shadow-pill dark:bg-primary-500'
                  >
                    {border?.name}
                  </Link>
                );
              })
            ) : (
              <Text as='span' className='font-light'>
                None
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetails };
