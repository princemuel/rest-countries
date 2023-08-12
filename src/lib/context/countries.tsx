import { produce } from "immer";
import * as React from "react";
import { getCountries, getRegions } from "../lib";

interface IState {
  countries: CountryType[];
  regions: string[];
  filter: string;
  search: string;
}

type IActions =
  | {
      type: "INITIALIZE";
      payload: { countries: CountryType[]; regions: string[] };
    }
  | { type: "SEARCH"; payload: string }
  | { type: "FILTER"; payload: string };

const CountriesContext = React.createContext<IState | undefined>(undefined);

const CountriesDispatch = React.createContext<
  React.Dispatch<IActions> | undefined
>(undefined);

const initialState: IState = {
  countries: [],
  regions: [],
  filter: "All",
  search: "",
};

interface Props {
  children: React.ReactNode;
}

export const CountriesProvider = ({ children }: Props) => {
  let [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const init = async () => {
      const response = await getCountries();
      const res = await getRegions();

      dispatch({
        type: "INITIALIZE",
        payload: {
          countries: response,
          regions: res,
        },
      });
    };
    init();
  }, []);

  state = React.useMemo(() => state, [state]);
  dispatch = React.useMemo(() => dispatch, [dispatch]);

  return (
    <CountriesContext.Provider value={state}>
      <CountriesDispatch.Provider value={dispatch}>
        {children}
      </CountriesDispatch.Provider>
    </CountriesContext.Provider>
  );
};

export function useCountriesState() {
  const context = React.useContext(CountriesContext);
  if (!context) {
    throw new ReferenceError(
      `useCountries must be used in a CountriesProvider`
    );
  }
  return context;
}

export function useCountriesDispatch() {
  const context = React.useContext(CountriesDispatch);
  if (!context) {
    throw new ReferenceError(
      `useSetCountries must be used in a CountriesProvider`
    );
  }
  return context;
}

const reducer = produce((draft: IState, action: IActions) => {
  switch (action.type) {
    case "INITIALIZE":
      draft.countries = action?.payload.countries;
      draft.regions = action?.payload.regions;
      break;
    case "SEARCH":
      draft.search = action.payload;
      break;
    case "FILTER":
      draft.filter = action.payload;
      break;
    default: {
      //@ts-expect-error
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
});
