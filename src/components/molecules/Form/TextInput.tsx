import { memo, useCallback, useEffect, useRef } from 'react';

import { BaseLabel, BaseInput } from '@components/atoms';
import { Card } from '@components/molecules';
import { IFormTextInput } from 'types/forms';

const TextInput = ({
  id,
  name,
  label,
  value,
  handleChange,
  placeholder,
  required
}: IFormTextInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const standardInputChange = useCallback(() => {
    inputRef && inputRef.current !== null && handleChange(inputRef);
    console.log('ready');
  }, [handleChange]);

  useEffect(() => {
    standardInputChange();
  }, [standardInputChange]);

  return (
    <Card flex="0" padding="4px" margin="auto">
      <BaseLabel htmlFor={name}>{label}</BaseLabel>
      <BaseInput
        ref={inputRef}
        type="text"
        id={id}
        name={name}
        onChange={() => standardInputChange()}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
    </Card>
  );
};

const MemoTextInput = memo(TextInput);
export { MemoTextInput as TextInput };
