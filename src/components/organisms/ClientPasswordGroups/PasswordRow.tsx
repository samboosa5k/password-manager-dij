import { FlexRow } from '@components/molecules';
import { ILocalPassword } from 'types/local-storage';

type PasswordRow = {
  pswd: ILocalPassword;
  idx: number;
  revealIndex: number | null;
  handleReveal: (idx: number) => void;
};

export const PasswordRow = ({
  pswd,
  idx,
  revealIndex,
  handleReveal
}: PasswordRow) => {
  return (
    <FlexRow
      position="relative"
      width="100%"
      justifyContent="space-between"
      color="var(--gray-900)"
      borderBottom="2px solid var(--blue-400)"
      padding="4px">
      <span>Reference: {pswd.reference}</span>
      <span>{revealIndex === idx ? pswd.password : '************'}</span>
      <span onClick={() => handleReveal(idx)}>&#128065;</span>
    </FlexRow>
  );
};
