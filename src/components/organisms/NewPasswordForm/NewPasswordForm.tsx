import { useCallback, useEffect, useRef, useState } from 'react';

import { FlexColumn } from '@components/molecules';

import { usePasswordState } from 'contexts/NewPasswordContext/PasswordContext';
import { newPasswordRegex, validPassword } from '@constants/password-validation';

import { ClientSelect } from './ClientSelect';
import { PasswordConfirm } from './PasswordConfirm';
import { PasswordRequirements } from './PasswordRequirements';
import { PasswordStart } from './PasswordStart';
import { SubmitAction } from './SubmitAction';
import { TitleInput } from './TitleInput';

export const NewPasswordForm = () => {
  const { passwordState, dispatch } = usePasswordState();

  return (
    <FlexColumn
      id="newPasswordForm"
      position="relative"
      width="auto"
      height="auto"
      margin="4px"
      backgroundColor="var(--gray-200)"
      padding="1em">
      <>
        <ClientSelect />
        <TitleInput />
        <PasswordRequirements />
        <PasswordStart />
        <PasswordConfirm />

        <SubmitAction passwordState={passwordState} dispatch={dispatch} />
      </>
    </FlexColumn>
  );
};
