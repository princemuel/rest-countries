import { hasValues } from '@/helpers';
import { getCountryBySlug, toBase64 } from '@/lib';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';
import { CountryMap } from '../molecules';

// https://en.wikipedia.org/api/rest_v1/page/summary/
//i want get info about a country from wikipedia using the country's iso code. can you make a list of apis i can use?
const lf = new Intl.ListFormat('en');

interface Props {
  slug?: string;
}

export const CountryDetails = async ({ slug }: Props) => {
  const response = (await getCountryBySlug(slug)) || [];
  const country = response[0];
  const blurDataUrl = await toBase64(country.flags.svg);

  const borders = await Promise.all(
    (country?.borders ?? []).map(async (border) => {
      try {
        const response = await getCountryBySlug(border);
        return response[0];
      } catch (error) {
        return null;
      }
    })
  );

  return (
    <article>
      <div className='flex flex-col flex-wrap gap-16 md:flex-row md:gap-10 lg:gap-20'>
        <figure className='overflow-hidden rounded-xl'>
          <NextImage
            src={country?.flags?.svg}
            alt={country?.flags?.alt || ''}
            width={672}
            height={378}
            style={{ height: 'auto' }}
            sizes='(min-width: 720px) 672px, calc(95.5vw - 19px)'
            className='aspect-video rounded-xl object-cover'
            priority={true}
            blurDataURL={blurDataUrl}
            placeholder='blur'
          />
          <figcaption className='sr-only'>{country?.name?.official}</figcaption>
        </figure>

        <div className='flex flex-1 flex-col gap-8 md:self-center'>
          <header>
            <h2 className='text-2xl font-extrabold md:text-4xl'>
              {country?.name?.common}
            </h2>
          </header>

          <div className='flex flex-col flex-wrap gap-8 md:flex-row lg:gap-4'>
            <div className='flex flex-1 flex-col gap-2'>
              <dl className='flex flex-row gap-2'>
                <dt className='whitespace-pre font-semibold'>Native Name:</dt>
                <dd className='font-light'>
                  {lf.format(
                    (Object.values(country?.name?.nativeName || {}) || []).map(
                      (name) => name?.common
                    )
                  )}
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Population:</dt>
                <dd className='font-light'>{country?.population}</dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Region:</dt>
                <dd className='font-light'>{country?.region}</dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='whitespace-pre font-semibold'>Sub Region:</dt>
                <dd className='whitespace-pre font-light'>
                  {country?.subregion}
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Capital:</dt>
                <dd className='font-light'>{country?.capital?.[0]}</dd>
              </dl>
            </div>

            <div className='flex flex-1 flex-col gap-2'>
              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Top Level Domain:</dt>
                <dd className='font-light'>
                  {hasValues(country?.tld) ? lf.format(country?.tld) : 'None'}
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Currencies:</dt>
                <dd className='font-light'>
                  {lf.format(
                    Object.values(country?.currencies || {}).map(
                      (currency) => currency?.name
                    )
                  )}
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Languages:</dt>
                <dd className='whitespace-pre font-light'>
                  {lf.format(Object.values(country?.languages || {}) || [])}
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Trafic:</dt>
                <dd className='font-light capitalize'>
                  {country?.car?.side} hand drive
                </dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Timezone:</dt>
                <dd className='font-light'>{lf.format(country?.timezones)}</dd>
              </dl>

              <dl className='flex flex-row gap-2'>
                <dt className='font-semibold'>Landlocked:</dt>
                <dd className='font-light'>
                  {country?.landlocked ? 'Yes' : 'No'}
                </dd>
              </dl>
            </div>
          </div>

          <div>
            <dl className='flex flex-row flex-wrap items-center gap-2'>
              <dt className='whitespace-pre font-semibold'>
                Border Countries:
              </dt>

              <React.Suspense fallback={<div>Loading..</div>}>
                <div className='flex flex-wrap gap-3'>
                  {hasValues(borders) ? (
                    borders?.map((border) => {
                      return (
                        <dd
                          key={border?.cca3}
                          className='flex-1 rounded-sm text-center shadow-pill'
                        >
                          <NextLink
                            href={`/countries/${border?.cca3}`}
                            className='inline-flex items-center justify-center px-4 py-1 text-sm font-light capitalize'
                          >
                            {border?.name?.common}
                          </NextLink>
                        </dd>
                      );
                    })
                  ) : (
                    <dd className='flex-1 text-sm font-light capitalize'>
                      None
                    </dd>
                  )}
                </div>
              </React.Suspense>
            </dl>
          </div>
        </div>
      </div>

      <div className='my-10 overflow-hidden rounded-sm'>
        <header className='bg-stone-200 p-3 dark:bg-slate-300'>
          <h4 className='text-base font-bold capitalize text-neutral-700'>
            Map of {country?.name?.common}
          </h4>
        </header>

        <div className='bg-stone-100 p-3 dark:bg-slate-100'>
          <React.Suspense fallback={<div>Loading..</div>}>
            <CountryMap country={country} />
          </React.Suspense>
        </div>
      </div>
      {/* <NextLink href={'/'}>Hello</NextLink> */}
      {/* <pre>{JSON.stringify(country, null, 2)}</pre> */}
    </article>
  );
};
