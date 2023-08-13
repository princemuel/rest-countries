'use client';

import { useCountry } from '@/context';
import { hasValues } from '@/helpers';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';

interface Props {}

// https://en.wikipedia.org/api/rest_v1/page/summary/
//i want get info about a country from wikipedia using the country's iso code. can you make a list of apis i can use?

export const CountryDetails = (props: Props) => {
  const countryPromise = useCountry();
  const country = React.use(countryPromise)[0];

  return (
    <div>
      <article>
        <NextImage
          src={country?.flags?.svg}
          alt={country?.flags?.alt || ''}
          width={672}
          height={378}
          style={{ height: 'auto' }}
          sizes='(min-width: 720px) 672px, calc(95.5vw - 19px)'
          className='aspect-video object-cover'

          // placeholder='blur'
        />

        <header>
          <h2 className=''>{country?.name?.common}</h2>
        </header>

        <dl className=''>
          <dt className='font-semibold'>Native Name:</dt>
          <dd className='font-light'>
            {country?.name?.nativeName?.eng?.common}
          </dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Population:</dt>
          <dd className='font-light'>{country?.population}</dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Region:</dt>
          <dd className='font-light'>{country?.region}</dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Sub Region:</dt>
          <dd className='font-light'>{country?.subregion}</dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Capital:</dt>
          <dd className='font-light'>{country?.capital?.[0]}</dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Top Level Domain:</dt>
          <dd className='font-light'>{country?.tld}</dd>
          {/* <dd className='font-light'>{country?.tld?.[0]}</dd> */}
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Currencies:</dt>
          <dd className='font-light'>{JSON.stringify(country?.currencies)}</dd>
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Languages:</dt>
          <dd className='font-light'>{JSON.stringify(country?.languages)}</dd>
        </dl>

        <dl>
          <dt>Border Countries:</dt>

          {hasValues(country?.borders) ? (
            country?.borders.map((border) => {
              return (
                <dd key={border}>
                  <NextLink href={`/countries/${border}`} className='block'>
                    {border}
                  </NextLink>
                </dd>
              );
            })
          ) : (
            <dd>None</dd>
          )}
        </dl>

        <dl className=''>
          <dt className='font-semibold'>Landlocked:</dt>
          <dd className='font-light'>{country?.landlocked ? 'Yes' : 'No'}</dd>
        </dl>

        <p>{JSON.stringify(country?.maps)}</p>
        <p>{JSON.stringify(country?.latlng)}</p>
        <p>{JSON.stringify(country?.capitalInfo)}</p>

        <p>{JSON.stringify(country?.timezones)}</p>
        <p>{JSON.stringify(country?.timezones)}</p>
        <p>{JSON.stringify(country?.car?.side)}</p>
      </article>
      {/* <NextLink href={'/'}>Hello</NextLink> */}
      {/* <pre>{JSON.stringify(country, null, 2)}</pre> */}
    </div>
  );
};
