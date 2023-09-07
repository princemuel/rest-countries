'use client';

import { useFilterDispatch, useFilterState } from '@/context';
import { SearchIcon } from 'lucide-react';
import { useTransition } from 'react';

export function SearchForm() {
  const [_, startTransition] = useTransition();
  const state = useFilterState();
  const dispatch = useFilterDispatch();

  function handleSearch(e: ReactInputEvent) {
    startTransition(() => {
      dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
      dispatch({ type: 'SEARCH', payload: e.target.value });
    });
  }

  return (
    <div
      role='search'
      className='basis-0 rounded-md bg-white px-6 py-5 shadow-input dark:bg-brand-500 md:basis-72'
    >
      <div className='flex items-center gap-3 '>
        <label htmlFor='search'>
          <SearchIcon
            aria-hidden='true'
            className='h-6 w-6 text-zinc-500 dark:text-white'
          />
          <span className='sr-only'>Search for a country</span>
        </label>

        <input
          type='text'
          id='search'
          value={state.searchTerm}
          className='w-full border-none bg-white text-brand-300 outline-none placeholder:text-zinc-500 dark:bg-brand-500 dark:text-white dark:placeholder:text-white'
          aria-label='Search for a country'
          placeholder='Search for a country…'
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
