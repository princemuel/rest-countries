import { FilterForm, SearchForm } from '../molecules';

interface Props {}

const Filters = (props: Props) => {
  return (
    <div className='my-12 flex flex-col justify-between gap-16 md:flex-row md:items-center'>
      <SearchForm />
      <FilterForm />
    </div>
  );
};

export { Filters };
