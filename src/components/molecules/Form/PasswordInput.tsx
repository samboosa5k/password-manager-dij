import { memo } from 'react';

import { BaseInput, BaseLabel, H3 } from '@components/atoms';

import { IFormTextInput } from 'types/forms';
import { newPasswordRegex, validPassword } from '@constants/password-validation';

import { FlexColumn, FlexRow } from '../Container';

const PasswordInput = ({
  id,
  name,
  label,
  value,
  handleChange,
  placeholder
}: IFormTextInput) => {
  return (
    <FlexColumn
      position="relative"
      width="100%"
      height="auto"
      margin="0 0 0.5em 0">
      <FlexRow>
        <BaseLabel htmlFor={name}>
          {label}
          {'        '}
          <H3 as="span" color="var(--green-700)">
            {value}
          </H3>
        </BaseLabel>
      </FlexRow>
      <BaseInput
        type="password"
        border={`${
          validPassword(newPasswordRegex, value)
            ? 'var(--green-600)'
            : 'var(--red-700)'
        }`}
        id={id}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
        placeholder={placeholder}
        required
      />
    </FlexColumn>
  );
};

const MemoPasswordInput = memo(PasswordInput);
export { MemoPasswordInput as PasswordInput };
