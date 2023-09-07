'use client';

import { useCountries, useFilterDispatch, useFilterState } from '@/context';
import { cn } from '@/helpers';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { Fragment, use, useMemo, useTransition } from 'react';

export function FilterForm() {
  const [isPending, startTransition] = useTransition();

  const countriesPromise = useCountries();
  const countries = use(countriesPromise);

  const state = useFilterState();
  const dispatch = useFilterDispatch();

  const regions = useMemo(() => {
    return Array.from(
      new Set(['All', ...countries.map((country) => country.region)])
    ).map((region) => ({ name: region }));
  }, [countries]);

  return (
    <Listbox
      value={state.filterTerm}
      name='current-choice'
      onChange={(value) => {
        startTransition(() => {
          dispatch({ type: 'SET_FILTER_TERM', payload: value });
          dispatch({ type: 'FILTER', payload: value });
        });
      }}
    >
      <div className='relative z-[1] mt-1 w-3/4 basis-64'>
        <Listbox.Button
          className={cn(
            'relative flex w-full cursor-pointer items-center justify-between rounded-md bg-white px-6 py-5 text-left text-brand-300 shadow-input outline-none focus:outline-none dark:bg-brand-500 dark:text-white sm:text-sm',
            isPending ? 'opacity-80' : 'opacity-100'
          )}
        >
          {({ value }) => (
            <>
              <span className='block truncate'>{value}</span>
              <span className='pointer-events-none flex items-center'>
                <ChevronDownIcon
                  className='h-5 w-5 text-zinc-400 transition-transform duration-300 ease-in-out ui-open:rotate-180 ui-not-open:rotate-0 dark:text-white'
                  aria-hidden='true'
                />
              </span>
            </>
          )}
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter='transition duration-300 ease-in'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-150 ease-in-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full scroll-pt-4 overflow-auto rounded-md bg-white py-1 text-base text-brand-300 shadow-input focus:outline-none dark:bg-brand-500 dark:text-white sm:text-sm'>
            {regions.map((region) => (
              <Listbox.Option
                key={region.name}
                value={region.name}
                className='relative select-none px-6 py-2 dark:ui-selected:bg-brand-300 dark:ui-active:bg-brand-300'
              >
                <span className='block truncate ui-selected:font-medium ui-not-selected:font-normal'>
                  {region.name}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
