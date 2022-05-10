import { BaseInput } from '@components/atoms';
import { Card, PasswordInput, TextInput } from '@components/molecules';
import { useFormValidator } from '@components/organisms/AddNewPasswordView/useFormValidator';
import clients from '@constants/temp_pastebin.json';
import { useLocalPassword } from '@hooks/useLocalStorage/useLocalStorage';
import { Dropdown } from '@molecules/Form/Dropdown';
import { PasswordRequirements } from '@molecules/Form/PasswordRequirements';
import { FormElemRef } from 'types/events';
import { INewPasswordState } from 'types/new-passwords';
import { isDefined } from 'utils/value-checks';

import { FormActions, NewPasswordActions } from './reducerActions';

const TEMP_OPTIONS = clients.map(({ name }) => {
  return { label: name, value: name };
});

interface IFormBody {
  handleChange: (formElem: FormElemRef) => void;
  passwordState: INewPasswordState;
  dispatch: (value: NewPasswordActions) => void;
}

export const FormBody = ({
  handleChange,
  dispatch,
  passwordState
}: IFormBody) => {
  const { valid } = useFormValidator(passwordState);
  const { addPassword } = useLocalPassword();

  // Subkmit the form
  const handleSubmit = () => {
    const { client, reference, password } = passwordState;
    addPassword({
      clientKey: client,
      passwordObj: { reference: reference, password: password }
    });
    dispatch({ type: FormActions.RESET_FORM });
  };

  return (
    <>
      {isDefined(passwordState) && (
        <>
          <Dropdown
            id="client"
            options={TEMP_OPTIONS}
            name="clientsDropdown"
            label="Clients:"
            value={passwordState.client}
            handleChange={handleChange}
          />
          <TextInput
            id="reference"
            required
            name="reference"
            label="Password Reference:"
            handleChange={handleChange}
            placeholder="Enter a name name for easy reference"
            value={passwordState.reference}
          />

          <PasswordRequirements />

          <PasswordInput
            id="password"
            label="New Password:"
            handleChange={handleChange}
            placeholder="Enter a new password"
            value={''}
          />

          <PasswordInput
            id="passwordConfirm"
            label="Confirm Password:"
            handleChange={handleChange}
            placeholder="Confirm your new password"
            value={''}
          />
          <Card success={valid}>
            <BaseInput
              id="resetFormAction"
              type="button"
              onClick={valid ? () => handleSubmit() : () => {}}
              value="Submit"
            />
          </Card>
        </>
      )}
    </>
  );
};
