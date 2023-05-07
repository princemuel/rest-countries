import * as React from 'react';
import { capitalize } from '../utils';

export function createStore<State>(initial: State, prefix: string) {
  interface StoreFactory {
    get: () => State;
    set: (value: Partial<State>) => void;
    subscribe: (onStoreChange: HasNoReturnValue) => HasNoReturnValue;
  }
  type HasNoReturnValue = () => void;

  function useStoreFactory(): StoreFactory {
    const store = React.useRef(initial);

    const get = React.useCallback(() => {
      return store?.current;
    }, []);

    const subscribers = React.useRef(new Set<HasNoReturnValue>());

    const set = React.useCallback((value: Partial<State>) => {
      store.current = { ...store?.current, ...value };
      subscribers?.current?.forEach((callback) => callback());
    }, []);

    const subscribe = React.useCallback((callback: HasNoReturnValue) => {
      subscribers?.current?.add(callback);
      return () => subscribers?.current?.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type StoreType = ReturnType<typeof useStoreFactory>['get'];
  type StoreSetterType = ReturnType<typeof useStoreFactory>['set'];
  type StoreSubscriberType = ReturnType<typeof useStoreFactory>['subscribe'];

  const STORE_NAME = capitalize(prefix || 'Store');

  const Store = React.createContext<StoreType | null>(null);
  const StoreSetter = React.createContext<StoreSetterType | null>(null);
  const StoreSubscriber = React.createContext<StoreSubscriberType | null>(null);

  Store.displayName = STORE_NAME + 'Context';

  interface Props {
    children: React.ReactNode;
  }

  const StoreProvider = ({ children }: Props) => {
    const { get, set, subscribe } = useStoreFactory();

    const memoizedGetter = React.useMemo(() => get, [get]);
    const memoizedSetter = React.useMemo(() => set, [set]);
    const memoizedSubscriber = React.useMemo(() => subscribe, [subscribe]);

    return (
      <Store.Provider value={memoizedGetter}>
        <StoreSetter.Provider value={memoizedSetter}>
          <StoreSubscriber.Provider value={memoizedSubscriber}>
            {children}
          </StoreSubscriber.Provider>
        </StoreSetter.Provider>
      </Store.Provider>
    );
  };

  function useStore<T>(
    selector: (store: State) => T
  ): [T, (value: Partial<State>) => void] {
    const get = React.useContext(Store);
    const set = React.useContext(StoreSetter);
    const subscribe = React.useContext(StoreSubscriber);

    if (get == null || subscribe == null || set == null)
      throw new Error(
        `use${STORE_NAME}Store must be used in a ${STORE_NAME}Provider`
      );
    const state = React.useSyncExternalStore(
      subscribe,
      () => selector(get()),
      () => selector(get())
    );

    return [state, set];
  }

  return [StoreProvider, useStore] as const;
}
