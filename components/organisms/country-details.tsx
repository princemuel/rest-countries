'use client';

import { DEFAULT_MAP_ATTRIBUTION, DEFAULT_MAP_URL } from '@/config';
import { useCountry, useImage } from '@/context';
import { hasValues } from '@/helpers';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';
import { MapPlaceholder } from '../atoms';
import { Map } from '../molecules';

interface Props {}

// https://en.wikipedia.org/api/rest_v1/page/summary/
//i want get info about a country from wikipedia using the country's iso code. can you make a list of apis i can use?

export const CountryDetails = (props: Props) => {
  const countryPromise = useCountry();
  const imagePromise = useImage();

  const country = React.use(countryPromise)[0];
  const blurDataUrl = React.use(imagePromise);

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
          priority={true}
          blurDataURL={blurDataUrl}
          placeholder='blur'
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
        <p>{JSON.stringify(country?.car?.side)}</p>

        <div className='my-10 overflow-hidden rounded-sm'>
          <header className='bg-stone-200 p-3 dark:bg-slate-300'>
            <h4 className='text-base font-bold capitalize text-neutral-700'>
              Map of {country?.name?.common}
            </h4>
          </header>

          <div className='bg-stone-100 p-3 dark:bg-slate-100'>
            <Map
              width='640'
              height='360'
              center={
                country?.capitalInfo?.latlng || country?.latlng || [51, -0.09]
              }
              zoom={country?.latlng ? 7 : 2}
              scrollWheelZoom={false}
              location={country?.latlng}
              className=''
              placeholder={<MapPlaceholder location={country?.name.common} />}
            >
              {({ TileLayer, Marker, Popup }) => (
                <React.Fragment>
                  <TileLayer
                    url={DEFAULT_MAP_URL}
                    attribution={DEFAULT_MAP_ATTRIBUTION}
                  />
                  <Marker
                    position={
                      country?.capitalInfo?.latlng ||
                      country?.latlng || [51.51, -0.08]
                    }
                  >
                    <Popup>Capital</Popup>
                  </Marker>
                </React.Fragment>
              )}
            </Map>
          </div>
        </div>
      </article>
      {/* <NextLink href={'/'}>Hello</NextLink> */}
      {/* <pre>{JSON.stringify(country, null, 2)}</pre> */}
    </div>
  );
};
