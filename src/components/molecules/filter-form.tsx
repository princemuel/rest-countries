import { useRef, useState } from 'react';
import { ReactSelectEvent } from '../../@types';
import {
  useCountriesDispatch,
  useCountriesState,
  useTheme,
} from '../../context';
import { useClickOutside } from '../../hooks';
import { clsx, hasValues } from '../../utils';

type Props = {};

const FilterForm = (props: Props) => {
  const theme = useTheme();
  const state = useCountriesState();
  const dispatch = useCountriesDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useClickOutside(ref, () => {
    setShowDropdown(false);
  });

  const regions = state?.regions;
  const url = theme === 'light' ? 'light' : 'dark';

  function handleFilter(e: ReactSelectEvent) {
    dispatch({ type: 'FILTER', payload: e.currentTarget.textContent! });
  }

  return (
    <form className='w-4/5 max-w-xs shadow-input'>
      <div className='relative w-full rounded-lg bg-neutral-100 px-8 py-6 dark:bg-primary-500'>
        <button
          type='button'
          className={clsx(
            `peer inline-flex  w-full items-center justify-between text-[1.4rem] leading-8 text-primary-300 dark:text-neutral-100`,
            showDropdown && 'is-shown'
          )}
          aria-controls='regions'
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>Filter by Region</span>
          <img
            src={`/assets/expand-${url}.svg`}
            alt={'click to select region'}
            aria-hidden='true'
          />
        </button>

        <ul
          id='regions'
          ref={ref}
          className='absolute left-0 z-10 mt-8 w-full scale-y-0 space-y-4 rounded-lg bg-neutral-100 px-8 py-6 shadow-input transition-all duration-500 aria-expanded:scale-100 dark:bg-primary-500'
          aria-expanded={showDropdown}
        >
          <li onClick={handleFilter}>All</li>
          {hasValues(regions)
            ? regions.map((region) => {
                return (
                  <li
                    key={region}
                    onClick={handleFilter}
                    className='cursor-pointer'
                  >
                    {region}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </form>
  );
};

export { FilterForm };
