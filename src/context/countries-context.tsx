import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { ICountry } from '../@types';
import { getCountries, getRegions } from '../lib';

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

const CountriesContext = createContext<IState | null>(null);
const CountriesDispatch = createContext<Dispatch<IActions> | null>(null);

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

export const useCountriesState = () => {
  const context = useContext(CountriesContext);
  if (context == undefined)
    throw new Error(
      'useCountriesState must be used within a CountriesProvider'
    );
  return context;
};

export const useCountriesDispatch = () => {
  const context = useContext(CountriesDispatch);
  if (context == undefined)
    throw new Error(
      'useCountriesDispatch must be used within a CountriesProvider'
    );
  return context;
};

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
