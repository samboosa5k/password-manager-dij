import {
  memo,
  StrictMode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { BaseLabel, BaseInput, P, SPAN } from '@components/atoms';
import { Card } from '@components/molecules';
import {
  newPasswordRegex,
  validPassword
} from '@constants/password-validation';
import { IFormTextInput } from 'types/forms';

/**
 * PasswordInput
 * @description - The componentnt works similarly to the TextInput component,
 * the difference is that it won't update the "NewPassword" state
 * until it meets the Regex requirements from "constants/password-validation.ts"
 */
const PasswordInput = ({
  id,
  label,
  value,
  handleChange,
  placeholder
}: Required<Omit<IFormTextInput, 'name' | 'required'>>) => {
  const [password, setPassword] = useState(''); // Once the password is valid, it will be sent
  const [isValid, setIsValid] = useState(false); // The password is valid if it meets the Regex requirements
  const passwordInputRef = useRef<HTMLInputElement>(null); // to the parent

  // Purely for setting local password state
  const localPasswordChange = useCallback(() => {
    if (passwordInputRef && passwordInputRef.current !== null) {
      const validated = validPassword(
        newPasswordRegex,
        passwordInputRef.current.value
      );
      if (!validated) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
      handleChange(passwordInputRef);
      setPassword(passwordInputRef.current.value);
    }
  }, [setPassword]);

  return (
    <Card>
      <BaseLabel htmlFor={id}>
        {label}
        <SPAN>{password}</SPAN>
      </BaseLabel>
      <StrictMode>
        <BaseInput
          border={`${isValid ? 'var(--blue-200)' : 'var(--red-700)'}`}
          ref={passwordInputRef}
          type="password"
          id={id}
          name={id}
          onChange={() => localPasswordChange()}
          value={password}
          placeholder={placeholder}
          required
          autoComplete="off"
        />
      </StrictMode>
    </Card>
  );
};

const MemoizedPasswordInput = memo(PasswordInput);
export { MemoizedPasswordInput as PasswordInput };
