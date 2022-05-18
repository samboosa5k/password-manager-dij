import { createContext, Dispatch, useContext, useReducer } from 'react';
import { IChild } from '../@types/common';

import initialAppState, { IAppState } from './initialAppState';
import { AppStateDispatchActions } from './AppStateActions';
import { appStateReducer } from './appStateReducer';


interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppStateDispatchActions>;
}

const AppContext = createContext<IAppContext>({
    state: initialAppState,
    dispatch: () => initialAppState
  }
);

export const useAppState = () => {
  return useContext(AppContext);
};

// Context Provider
export const AppStateProvider = ({ children }: IChild) => {
  const [state, dispatch] = useReducer(appStateReducer, initialAppState);

  // @todo: this there should be an init in App.tsx
  // useEffect(() => {
  //   // Set initial app state
  //   dispatch({
  //     type: AppStateActions.SET_LOADED_CLIENTS,
  //     payload: API_RESULTS
  //   });
  // }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};


