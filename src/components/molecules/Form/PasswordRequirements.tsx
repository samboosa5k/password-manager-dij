import { BaseLabel } from '@atoms/Input';
import UL, { LI } from '@atoms/Text/List';
import { SPAN } from '@components/atoms';
import { Card } from '@components/molecules';

export const PasswordRequirements = () => (
  <>
    <Card>
      <BaseLabel>New Password Requirements:</BaseLabel>
      <UL>
        <LI>6 + characters</LI>
        <LI>1 or more uppercase/lowercase letter</LI>
        <LI>1 or more numbers</LI>
        <LI>1 or more special symbols</LI>
      </UL>
    </Card>
    <BaseLabel>
      <SPAN>
        When the password is validated, the input field will turn blue!
      </SPAN>
    </BaseLabel>
  </>
);
