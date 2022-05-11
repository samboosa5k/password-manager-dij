import { createContext, Dispatch, useContext, useEffect, useReducer } from 'react';

import { IChild } from 'types/common';

import initialPasswordState, { IPasswordState } from './initialState';
import { PasswordDispatchActions, PasswordStateActions } from './passwordReducerActions';
import { passwordStateReducer } from './passwordStateReducer';

interface IPasswordContext {
  passwordState: IPasswordState;
  dispatch: Dispatch<PasswordDispatchActions>;
}

// Context setup for the new password form
const PasswordContext = createContext<IPasswordContext>({
  passwordState: initialPasswordState,
  dispatch: () => {}
});

export const usePasswordState = () => {
  return useContext(PasswordContext);
};

// Context provider for the new password form
const PasswordStateProvider = ({ children }: IChild) => {
  const [passwordState, dispatch] = useReducer(
    passwordStateReducer,
    initialPasswordState
  );

  useEffect(() => {
    // Set initial app state
    console.log('passwordForm initialState', initialPasswordState);
  }, []);

  return (
    <PasswordContext.Provider value={{ passwordState, dispatch }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordStateProvider;
