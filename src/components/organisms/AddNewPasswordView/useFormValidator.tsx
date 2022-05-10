import { INewPasswordState } from 'types/new-passwords';

/**
 * Hook to verify to save, and then sent to local storage
 * @returns {void} - Returns nothing
 */
export const useFormValidator = (newPasswordState: INewPasswordState) => {
  // This verifies that the password has all the required fields
  const formComplete = (newPasswordState: INewPasswordState) => {
    return Object.entries(newPasswordState).every((keyVal: string[]) => {
      return keyVal[1].length > 0;
    });
  };

  // This verifies double equal password
  const passwordConfirmed = (newPasswordState: INewPasswordState) => {
    return newPasswordState.password === newPasswordState.passwordConfirm;
  };

  return {
    valid: formComplete(newPasswordState) && passwordConfirmed(newPasswordState)
  };
};
