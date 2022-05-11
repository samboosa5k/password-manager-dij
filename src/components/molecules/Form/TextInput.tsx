import { memo } from 'react';

import { BaseInput, BaseLabel } from '@components/atoms';

import { IFormTextInput } from 'types/forms';

import { FlexColumn } from '../Container';

const TextInput = ({
  id,
  name,
  label,
  value,
  handleChange,
  placeholder,
  required
}: IFormTextInput) => {
  return (
    <FlexColumn
      position="relative"
      width="100%"
      height="auto"
      margin="0 0 0.5em 0">
      <BaseLabel htmlFor={name}>{label}</BaseLabel>
      <BaseInput
        type="text"
        id={id}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </FlexColumn>
  );
};

const MemoTextInput = memo(TextInput);
export { MemoTextInput as TextInput };
