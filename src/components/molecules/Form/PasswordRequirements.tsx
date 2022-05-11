import { SPAN } from '@components/atoms';

import { BaseLabel } from '@atoms/Input';
import UL, { LI } from '@atoms/Text/List';

import { FlexColumn } from '../../molecules/Container';

export const PasswordRequirements = () => (
  <FlexColumn
    position="relative"
    width="100%"
    height="auto"
    margin="0 0 0.5em 0">
    <BaseLabel>New Password Requirements:</BaseLabel>
    <UL>
      <LI>6 + characters</LI>
      <LI>1 or more uppercase/lowercase letter</LI>
      <LI>1 or more numbers</LI>
      <LI>1 or more special symbols</LI>
    </UL>

    <BaseLabel>
      <SPAN>
        When the password is validated, the input field will turn blue!
      </SPAN>
    </BaseLabel>
  </FlexColumn>
);
