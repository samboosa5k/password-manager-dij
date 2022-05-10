import { memo, useCallback, useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import { Option, Select } from '@components/atoms';
import { BaseLabel } from '@components/atoms/Input';
import { Card } from '@components/molecules';
import { IFormDropdown } from 'types/forms';
import { isDefined } from 'utils/value-checks';

const Dropdown = ({
  id,
  name,
  label,
  value,
  options,
  handleChange
}: IFormDropdown) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectOptionChange = useCallback(() => {
    selectRef && selectRef.current !== null && handleChange(selectRef);
  }, [handleChange]);

  useEffect(() => {
    selectOptionChange();
  }, [selectOptionChange]);

  return (
    <Card flex="0" padding="4px" margin="auto">
      <BaseLabel htmlFor={name}>{label}</BaseLabel>
      {/* This will load from fetch --> Context later */}
      {isDefined(options) && (
        <Select
          ref={selectRef}
          id={id}
          name={name}
          onChange={() => selectOptionChange()}
          value={value}>
          <Option value="">Select</Option>
          {options.map(({ label, value }) => (
            <Option key={`dropdown_${nanoid(4)}`} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      )}
    </Card>
  );
};

const MemoizedDropdown = memo(Dropdown);
export { MemoizedDropdown as Dropdown };
