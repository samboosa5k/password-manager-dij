import { useCallback, useReducer } from 'react';

import { FormElemRef } from 'types/events';
import { INewPasswordState } from 'types/new-passwords';

import { FormActions } from '@components/organisms/AddNewPasswordView/reducerActions';

import { FormBody, formStateReducer } from './';

export const initFormState: INewPasswordState = {
  client: '',
  reference: '',
  password: '',
  passwordConfirm: ''
};

/**
 * The New Password FOrm
 * @returns {JSX.Element} - Returns a JSX element
 */
const AddNewPasswordView = () => {
  const [passwordState, dispatch] = useReducer(formStateReducer, initFormState);

  // Switch responsible for the form
  const handleChange = useCallback((formElem: FormElemRef) => {
    const { id, value } = formElem.current;

    switch (id) {
      case 'client':
        dispatch({ type: FormActions.UPDATE_CLIENT, payload: value });
        break;
      case 'reference':
        dispatch({ type: FormActions.UPDATE_REFERENCE, payload: value });
        break;
      case 'password':
        dispatch({ type: FormActions.UPDATE_PASSWORD, payload: value });
        break;
      case 'passwordConfirm':
        dispatch({
          type: FormActions.UPDATE_PASSWORD_CONFIRMATION,
          payload: value
        });
        break;
      case 'resetFormAction':
        dispatch({ type: FormActions.RESET_FORM });
        break;
      default:
        console.log('value', value);
        break;
    }
  }, []);

  // The form body
  return (
    <form id="newPasswordForm" autoComplete="off">
      <FormBody
        passwordState={passwordState}
        dispatch={dispatch}
        handleChange={handleChange}
      />
    </form>
  );
};

export { AddNewPasswordView };
