import { ChangeEvent } from 'react';

import { FlexColumn, TextInput } from '@components/molecules';

import { usePasswordState } from 'contexts/NewPasswordContext/PasswordContext';
import { isDefined } from 'utils/value-checks';
import { PasswordStateActions } from 'contexts/NewPasswordContext';

/**
 * New password title/reference input
 * @returns {JSX.Element}
 */
const TitleInput = () => {
  const { passwordState, dispatch } = usePasswordState();

  // Handle the input
  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch({ type: PasswordStateActions.UPDATE_REFERENCE, payload: value });
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      {isDefined(passwordState) && (
        <>
          <TextInput
            id="reference"
            required
            name="reference"
            label="Password Reference:"
            handleChange={handleChange}
            placeholder="Enter a name name for easy reference"
            value={passwordState.reference}
          />
        </>
      )}
    </FlexColumn>
  );
};

export { TitleInput };
