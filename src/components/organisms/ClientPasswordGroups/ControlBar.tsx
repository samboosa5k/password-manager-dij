import { H2 } from '@components/atoms';
import { Block, FlexColumn, FlexRow } from '@components/molecules';

import styled from 'styled-components';
import { IClient } from 'contexts';

type ControlBarProps = {
  client: IClient;
  handleTogglePasswords: () => void;
};

const ControlButton = styled(FlexColumn)`
  &:hover {
    cursor: pointer;

    & > * {
      color: var(--green-500);
      transition: color 0.2s ease-in-out;
    }
`;

export const ControlBar = ({
  client,
  handleTogglePasswords
}: ControlBarProps) => {
  return (
    <FlexRow
      position="relative"
      width="100%"
      height="auto"
      margin="0 0 0.5em 0">
      <Block
        position="relative"
        width="64px"
        height="64px"
        backgroundColor={client.color}></Block>

      <Block
        position="relative"
        backgroundColor="var(--gray-800)"
        padding="1em"
        width="100%">
        <H2 color="white">{client.name}</H2>
      </Block>
      <ControlButton
        position="relative"
        margin="auto 0 auto auto"
        width="64px"
        height="64px"
        backgroundColor="var(--gray-700)"
        //@ts-ignore
        onClick={() => handleTogglePasswords()}>
        <H2
          color="white"
          style={{ lineHeight: 0, margin: 'auto', cursor: 'pointer' }}>
          &#129147;
        </H2>
      </ControlButton>
    </FlexRow>
  );
};
