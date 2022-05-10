import styled from 'styled-components';

import { FlexColumn, FlexRow } from '@molecules/Container';
import { IThemedFunction } from 'types/styled-components';

export const AppContainer = styled(({ children, id }: IThemedFunction) => (
  <FlexColumn id={id} flex="1" backgroundColor="maroon">
    {children}
  </FlexColumn>
))``;

export const AppContent = styled(({ children, id }: IThemedFunction) => (
  <FlexRow id={id} flex="1" backgroundColor="gray">
    {children}
  </FlexRow>
))``;
