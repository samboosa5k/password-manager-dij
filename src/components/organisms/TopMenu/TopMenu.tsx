import { H2, SPAN } from '@components/atoms';
import { FlexRow } from '@molecules/Container';

export const TopMenu = ({ banner }: { banner: string }) => {
  return (
    <FlexRow flex="0" backgroundColor="black" padding="1em">
      <H2 as="h2" color="white">
        DIJ Password Manager
      </H2>
      <SPAN as="span" color="white">
        {banner}
      </SPAN>
    </FlexRow>
  );
};
