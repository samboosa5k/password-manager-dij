import { memo } from 'react';

import { Option, Select } from '@components/atoms';
import { BaseLabel } from '@components/atoms/Input';

import { nanoid } from 'nanoid';
import { IFormDropdown } from 'types/forms';
import { isDefined } from 'utils/value-checks';

import { FlexColumn } from '../Container';

const Dropdown = ({
  id,
  name,
  label,
  value,
  options,
  handleChange
}: IFormDropdown) => {
  return (
    <FlexColumn
      position="relative"
      width="100%"
      height="auto"
      margin="0 0 0.5em 0">
      <BaseLabel htmlFor={name}>{label}</BaseLabel>
      {/* This will load from fetch --> Context later */}
      {isDefined(options) && (
        <Select
          id={id}
          name={name}
          onChange={(e) => handleChange(e)}
          value={value}>
          <Option value="">Select</Option>
          {options.map(({ label, value }) => (
            <Option key={`dropdown_${nanoid(4)}`} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      )}
    </FlexColumn>
  );
};

// Just a demonstration of the type of memoization that can be done
const MemoizedDropdown = memo(Dropdown);
export { MemoizedDropdown as Dropdown };
