import { createContext, Dispatch, useContext, useReducer } from 'react';

import { IChild } from 'types/common';

import { AppStateDispatchActions } from './appReducerActons';
import { appStateReducer } from './appStateReducer';
import initialAppState, { IAppState } from './initialState';

interface IAppContext {
  appState: IAppState;
  dispatch: Dispatch<AppStateDispatchActions>;
}

// Context setup & Hook
const AppContext = createContext<IAppContext>({
  appState: initialAppState,
  dispatch: () => {}
});

export const useAppState = () => {
  return useContext(AppContext);
};

// Cntext Provider
const AppStateProvider = ({ children }: IChild) => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;
