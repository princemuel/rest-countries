import { useCountriesDispatch, useCountriesState } from '../../context';
import { ReactSelectEvent } from '../../types';
import { hasValues } from '../../utils';

type Props = {};

const FilterForm = (props: Props) => {
  const state = useCountriesState();
  const dispatch = useCountriesDispatch();
  const regions = state?.regions;

  function handleFilter(e: ReactSelectEvent) {
    dispatch({ type: 'FILTER', payload: e.target.value });
  }

  return (
    <form>
      <label>
        <select onChange={handleFilter}>
          <option key={'All'} value={'All'}>
            All
          </option>

          {hasValues(regions) &&
            regions.map((region) => {
              return (
                <option key={region} value={region}>
                  {region}
                </option>
              );
            })}
        </select>
      </label>
    </form>
  );
};

export { FilterForm };
