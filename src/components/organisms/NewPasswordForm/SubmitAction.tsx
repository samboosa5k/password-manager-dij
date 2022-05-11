import { Dispatch } from 'react';

import { ButtonSubmit } from '@components/atoms/Button';
import { FlexColumn } from '@components/molecules';
import { H3 } from '@components/atoms';

import {
  IPasswordState, PasswordDispatchActions, PasswordStateActions
} from 'contexts/NewPasswordContext';
import { useLocalPassword } from '@hooks/useLocalStorage/useLocalStorage';
import { newPasswordRegex, validPassword } from '@constants/password-validation';

interface ISubmitAction {
  passwordState: IPasswordState;
  dispatch: Dispatch<PasswordDispatchActions>;
}

/**
 * The button that finally trgiggers the save
 *
 *
 *
 * @returns void
 */
export const SubmitAction = ({ passwordState, dispatch }: ISubmitAction) => {
  const { addPassword } = useLocalPassword();

  // Construct the password object to be added to the local storage
  const submitNewPassword = () => {
    const { client, reference, password } = passwordState;
    const storageObj = {
      clientKey: client,
      passwordObj: { reference: reference, password: password }
    };
    setTimeout(() => {
      addPassword(storageObj);
      setTimeout(() => {
        dispatch({ type: PasswordStateActions.RESET_FORM });
      }, 50);
    }, 0);
  };

  // First check if the passwords meet requirements
  const checkIfPasswordsMatch = () => {
    const { password, passwordConfirm } = passwordState;
    if (password === passwordConfirm) {
      console.log('passwords match...checking if they are valid');
      if (validPassword(newPasswordRegex, password)) {
        console.log('passwords are valid...submitting');
        submitNewPassword();
      } else {
        alert('passwords are not valid...please try again');
      }
    } else {
      alert('passwords do not match...please try again');
    }
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      <ButtonSubmit
        as="button"
        id="submitNewPassword"
        onClick={checkIfPasswordsMatch}>
        <H3 fontSize="1.1em" color="white">
          Submit
        </H3>
      </ButtonSubmit>
    </FlexColumn>
  );
};
