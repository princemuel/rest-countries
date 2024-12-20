"use client";

import * as React from "react";

interface State {
  countries: CountryType[];
  searchTerm: string;
  filterTerm: string;
  filtered: CountryType[];
}
type Action =
  | { type: "SEARCH"; payload: string }
  | { type: "FILTER"; payload: string }
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_FILTER_TERM"; payload: string };

const FilterStateContext = React.createContext<State | null>(null);
const FilterDispatchContext =
  React.createContext<React.Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_FILTER_TERM":
      return {
        ...state,
        filterTerm: action.payload,
      };

    case "SEARCH": {
      const countries = Boolean(action.payload)
        ? state.filtered.filter((country) => {
            return RegExp(`${action.payload}`, "ig").test(country?.name.common);
          })
        : state.countries;
      return { ...state, filtered: countries };
    }

    case "FILTER": {
      const countries =
        action.payload.toLowerCase() !== "all"
          ? state.countries.filter((country) => {
              return new RegExp(`${action.payload}`, "ig").test(country.region);
            })
          : state.countries;
      return { ...state, filtered: countries };
    }

    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
  value: CountryType[];
}

export const FilterProvider = ({ children, value }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, {
    countries: value,
    searchTerm: "",
    filterTerm: "All",
    filtered: value,
  } satisfies State);

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

export function useFilterState() {
  const context = React.useContext(FilterStateContext);
  if (context == null)
    throw new Error("The `useFilter` hook must be used in a `FilterProvider`");

  return context;
}

export function useFilterDispatch() {
  const context = React.useContext(FilterDispatchContext);
  if (context == null)
    throw new Error(
      "The `useFilterDispatch` hook must be used in a `FilterProvider`",
    );

  return context;
}

////////////////////////////////
////////////////////////////////
///// ACTION CREATORS
////////////////////////////////
////////////////////////////////

type FilterDispatch = ReturnType<typeof useFilterDispatch>;

export function search(dispatch: FilterDispatch, payload: string) {
  dispatch({ type: "SET_SEARCH_TERM", payload });
  dispatch({ type: "SEARCH", payload });
}
export function filter(dispatch: FilterDispatch, payload: string) {
  dispatch({ type: "SET_FILTER_TERM", payload });
  dispatch({ type: "FILTER", payload });
}
