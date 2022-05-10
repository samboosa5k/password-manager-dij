import { H1, H2 } from '@components/atoms';
import { BlockFill, FlexColumn } from '@components/molecules/Container';
import { IChild } from 'types/common';

interface IPageProps extends IChild {
  title: string;
}

const DefaultPage = ({ children, title }: IPageProps) => {
  return (
    <FlexColumn
      position="relative"
      flex="1"
      backgroundColor="var(--gray-400)"
      alignItems="center"
      justifyContent="center"
      margin="1em">
      <BlockFill
        padding="1em"
        backgroundColor="var(--white)"
        border="1px solid var(--gray-200)">
        <H1>{title}</H1>
        {children}
      </BlockFill>
    </FlexColumn>
  );
};

export default DefaultPage;
