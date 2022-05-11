import { ChangeEvent } from 'react';

import { FlexColumn, PasswordInput } from '@components/molecules';

import { usePasswordState } from 'contexts/NewPasswordContext/PasswordContext';
import { isDefined } from 'utils/value-checks';
import { PasswordStateActions } from 'contexts/NewPasswordContext';

export const PasswordConfirm = () => {
  const { passwordState, dispatch } = usePasswordState();

  // PASSWORDS
  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch({
      type: PasswordStateActions.UPDATE_PASSWORD_CONFIRMATION,
      payload: value
    });
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      {isDefined(passwordState) && (
        <PasswordInput
          id="passwordConfirm"
          name="passwordConfirm"
          label="Confirm Password:"
          handleChange={handleChange}
          placeholder="Enter a new password"
          value={passwordState.passwordConfirm}
          required
        />
      )}
    </FlexColumn>
  );
};
