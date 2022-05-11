import { H2 } from '@components/atoms';
import { FlexColumn } from '@molecules/Container';

export const TopMenu = () => {
  return (
    <FlexColumn position="relative" backgroundColor="black" padding="1em">
      <H2 color="white">DIJ Password Manager</H2>
    </FlexColumn>
  );
};
