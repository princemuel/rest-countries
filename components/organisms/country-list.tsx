'use client';

import { useCountries, useImages } from '@/context';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';

const CountriesList = () => {
  const countriesPromise = useCountries();
  const imagesPromise = useImages();

  // unwrap the promises
  const countries = React.use(countriesPromise);
  const images = React.use(imagesPromise);

  return (
    <div className='grid gap-8 grid-cols-auto md:gap-8'>
      {countries.map((country) => {
        const flag = images.filter((image) => image.tag === country.cca3)[0];

        return (
          <article
            key={country?.name?.common}
            className='overflow-hidden rounded-md bg-white dark:bg-brand-500'
          >
            <NextLink href={`/countries/${country?.cca3}`} className='block'>
              <NextImage
                src={flag.url}
                alt={flag?.alt || ''}
                width={672}
                height={378}
                style={{ height: 'auto' }}
                sizes='(min-width: 720px) 672px, calc(95.5vw - 19px)'
                className='aspect-video object-cover'
                placeholder='blur'
                blurDataURL={flag.blurredDataUrl}
              />

              <div className='flex flex-col items-start gap-4 px-4 py-8'>
                <header>
                  <h3 className='text-lg font-extrabold'>
                    {country?.name?.common}
                  </h3>
                </header>

                <div aria-label={`${country?.name?.common} details`}>
                  <dl className='grid grid-cols-[10ch_auto] '>
                    <dt className='font-semibold'>Capital:</dt>
                    <dd className='font-light'>{country?.capital} </dd>
                  </dl>

                  <dl className='grid grid-cols-[10ch_auto]'>
                    <dt className='font-semibold'>Region:</dt>
                    <dd className='font-light'>{country?.region} </dd>
                  </dl>

                  <dl className='grid grid-cols-[10ch_auto] '>
                    <dt className='font-semibold'>Domain:</dt>
                    <dd className='font-light'>{country?.tld} </dd>
                  </dl>

                  <dl className='grid grid-cols-[10ch_auto]'>
                    <dt className='font-semibold'>Population:</dt>
                    <dd className='font-light'>
                      {(country?.population || 0).toLocaleString('en-US')}
                    </dd>
                  </dl>
                </div>
              </div>
            </NextLink>
          </article>
        );
      })}
    </div>
  );
};
export { CountriesList };
