import { H2, H3, P } from '@components/atoms';
import { Block, FlexColumn, FlexRow } from '@components/molecules';

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
      margin="0 0 0.5em 0"
      backgroundColor="var(--gray-200)">
      <FlexRow width="100%" padding="8px" justifyContent="space-between">
        <FlexColumn position="relative" width="33%">
          <H3 fontSize="0.7em" fontWeight={'bold'}>
            Title:
          </H3>
          <H3 fontSize="0.9em" fontWeight="bold" color="var(--gray-600)">
            {pswd.reference}
          </H3>
        </FlexColumn>
        <FlexColumn position="relative" width="33%">
          <H3 fontSize="0.7em" fontWeight={'bold'}>
            Password:
          </H3>
          {revealIndex === idx ? (
            <H3 fontWeight="bold" color="var(--green-600)">
              {pswd.password}
            </H3>
          ) : (
            <H3 fontWeight="normal" color="var(--purple-700)">
              &#10033; &#10033; &#10033; &#10033; &#10033;
            </H3>
          )}
        </FlexColumn>
        <FlexColumn position="relative" onClick={() => handleReveal(idx)}>
          <Block
            as="button"
            position="relative"
            borderRadius="50%"
            border="none"
            backgroundColor="var(--blue-600)"
            width="48px"
            height="48px"
            margin="auto"
            onClick={() => handleReveal(idx)}>
            <H2>&#128065;</H2>
          </Block>
        </FlexColumn>
      </FlexRow>
    </FlexRow>
  );
};
