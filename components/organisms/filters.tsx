import { FilterForm, SearchForm } from '../molecules';

export const Filters = () => {
  return (
    <div className='flex flex-col flex-wrap justify-between gap-14 md:flex-row'>
      <SearchForm />

      <FilterForm />
    </div>
  );
};
