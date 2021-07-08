import * as React from 'react';
import { Character, Vehicle } from '../types';
import * as ApiClient from '../api-client';

type StoreState = {
  characters: Character[];
  vehicles: Vehicle[];
};

type Actions = {
  getCharacters: () => Promise<void>;
  getVehicles: () => Promise<void>;
};

type ProviderValue = [StoreState, Actions];

const StateContext = React.createContext<ProviderValue | undefined>(undefined);

const initialState: StoreState = {
  characters: [],
  vehicles: [],
};

export const StoreProvider: React.FC = ({ children, ...props }) => {
  const [state, setState] = React.useState<StoreState>(initialState);

  const value = React.useMemo<ProviderValue>(() => {
    const providerSetters: Actions = {
      getCharacters: async () => {
        const characters = await ApiClient.getCharacters();
        setState((currentState) => ({ ...currentState, characters }));
      },
      getVehicles: async () => {
        const vehicles = await ApiClient.getVehicles();
        setState((currentState) => ({ ...currentState, vehicles }));
      },
    };

    return [state, providerSetters];
  }, [state, setState]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StateContext.Provider value={value} {...props}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = (): ProviderValue => {
  const globalState = React.useContext(StateContext);

  if (!globalState) {
    throw new Error('useGlobalState must me used within StoreProvider');
  }

  return globalState;
};
