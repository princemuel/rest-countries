import { Dispatch, ReactNode, useEffect, useReducer } from 'react';
import { ICountry } from '../@types';
import { getCountries, getRegions } from '../lib';
import { ContextFactory } from './context-factory';
import { ContextKeys } from './context-keys';

interface IState {
  countries: ICountry[];
  regions: string[];
  filter: string;
  search: string;
}

type IActions =
  | {
      type: 'INITIALIZE';
      payload: { countries: ICountry[]; regions: string[] };
    }
  | { type: 'SEARCH'; payload: string }
  | { type: 'FILTER'; payload: string };

const CountriesContext = ContextFactory.createContext<IState>(
  ContextKeys.COUNTRIESSTATE
);

const CountriesDispatch = ContextFactory.createContext<Dispatch<IActions>>(
  ContextKeys.COUNTRIESDISPATCH
);

const initialState: IState = {
  countries: [],
  regions: [],
  filter: 'All',
  search: '',
};

type ProviderProps = {
  children: ReactNode;
};

export const CountriesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const init = async () => {
      const response = await getCountries();
      const res = await getRegions();

      dispatch({
        type: 'INITIALIZE',
        payload: {
          countries: response,
          regions: res,
        },
      });
    };
    init();
  }, []);

  // const memoizedState = useMemo(() => state, [state]);
  // const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <CountriesContext.Provider value={state}>
      <CountriesDispatch.Provider value={dispatch}>
        {children}
      </CountriesDispatch.Provider>
    </CountriesContext.Provider>
  );
};

export const useCountriesState = () =>
  ContextFactory.useContext<IState>(ContextKeys.COUNTRIESSTATE);

export const useCountriesDispatch = () =>
  ContextFactory.useContext<Dispatch<IActions>>(ContextKeys.COUNTRIESDISPATCH);

const reducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        countries: action?.payload.countries,
        regions: action?.payload.regions,
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    default: {
      //@ts-expect-error
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
