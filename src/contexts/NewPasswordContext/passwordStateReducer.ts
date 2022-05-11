import { INewPasswordState } from 'types/new-passwords';

import initialPasswordState from './initialState';
import { PasswordDispatchActions, PasswordStateActions } from './passwordReducerActions';

export const passwordStateReducer = (
  state: INewPasswordState,
  action: PasswordDispatchActions
): INewPasswordState => {
  switch (action.type) {
    case PasswordStateActions.UPDATE_CLIENT:
      return {
        ...state,
        client: action.payload
      };
    case PasswordStateActions.UPDATE_REFERENCE:
      return {
        ...state,
        reference: action.payload
      };
    case PasswordStateActions.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case PasswordStateActions.UPDATE_PASSWORD_CONFIRMATION:
      return {
        ...state,
        passwordConfirm: action.payload
      };
    case PasswordStateActions.RESET_FORM:
      return initialPasswordState;
    default:
      return state;
  }
};
