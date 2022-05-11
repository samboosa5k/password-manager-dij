import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { IChild } from 'types/common';

import { API_RESULTS, API_URL } from '@constants/api';

import { AppStateActions, AppStateDispatchActions } from './appReducerActons';
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

  useEffect(() => {
    // Set initial app state
    dispatch({
      type: AppStateActions.SET_LOADED_CLIENTS,
      payload: API_RESULTS
    });
  }, []);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;
