import { ReactInputEvent } from '../../@types';
import { useCountriesDispatch, useTheme } from '../../lib';

interface Props {}

const SearchForm = (props: Props) => {
  const theme = useTheme();
  const url = theme === 'light' ? 'light' : 'dark';
  const dispatch = useCountriesDispatch();

  function handleSearch(e: ReactInputEvent) {
    dispatch({ type: 'SEARCH', payload: e.target.value });
  }

  return (
    <form
      role='search'
      className='flex w-full max-w-3xl items-center gap-6 rounded-lg bg-neutral-100 px-12 py-6 shadow-input dark:bg-primary-500'
    >
      <label htmlFor='search'>
        <img src={`/assets/search-${url}.svg`} aria-hidden='true' alt='back' />
        <span className='sr-only'>Search for a country</span>
      </label>

      <input
        type='text'
        id='search'
        className='w-full border-none bg-neutral-100 outline-none dark:bg-primary-500'
        aria-label='Search for a country…'
        placeholder='Search for a country…'
        onChange={handleSearch}
      />
    </form>
  );
};

export { SearchForm };
