import { Block, BlockFill } from '@components/molecules/Container';

import { IChild } from 'types/common';

interface IPageProps extends IChild {
  title: string;
}

const DefaultPage = ({ children }: IPageProps) => {
  return (
    <Block
      position="relative"
      width="100%"
      height="100%"
      backgroundColor="var(--gray-900)"
      alignItems="center"
      justifyContent="center"
      margin="0">
      <BlockFill backgroundColor="var(--gray-900)" margin="1em">
        {/* <H1>{title}</H1> */}
        {children}
      </BlockFill>
    </Block>
  );
};

export default DefaultPage;
