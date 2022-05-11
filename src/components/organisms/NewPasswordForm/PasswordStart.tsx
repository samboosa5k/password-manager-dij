import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { FlexColumn, PasswordInput } from '@components/molecules';

import { usePasswordState } from 'contexts/NewPasswordContext/PasswordContext';
import { isDefined, isNull } from 'utils/value-checks';
import { PasswordStateActions } from 'contexts/NewPasswordContext';
import { newPasswordRegex, validPassword } from '@constants/password-validation';

/**
 * Password creation form
 * @type {ExtraValidityProps} - Will control if the password can be added or not
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @returns {JSX.Element}
 */

export const PasswordStart = () => {
  const { passwordState, dispatch } = usePasswordState();

  // PASSWORDS
  const handleChange = (e: ChangeEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    dispatch({ type: PasswordStateActions.UPDATE_PASSWORD, payload: value });
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      <PasswordInput
        id="password"
        name="password"
        label="New Password:"
        handleChange={handleChange}
        placeholder="Enter a new password"
        value={passwordState.password}
        required
      />
    </FlexColumn>
  );
};
