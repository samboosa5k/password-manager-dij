import {
  NewPasswordActions,
  FormActions
} from '@components/organisms/AddNewPasswordView/reducerActions';

import { initFormState } from './AddNewPasswordView';
import { INewPasswordState } from 'types/new-passwords';

export const formStateReducer = (
  state: INewPasswordState,
  action: NewPasswordActions
): INewPasswordState => {
  switch (action.type) {
    case FormActions.UPDATE_CLIENT:
      return {
        ...state,
        client: action.payload
      };
    case FormActions.UPDATE_REFERENCE:
      return {
        ...state,
        reference: action.payload
      };
    case FormActions.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload + action.payload
      };
    case FormActions.UPDATE_PASSWORD_CONFIRMATION:
      return {
        ...state,
        passwordConfirm: action.payload
      };
    case FormActions.RESET_FORM:
      return initFormState;
    default:
      return state;
  }
};
