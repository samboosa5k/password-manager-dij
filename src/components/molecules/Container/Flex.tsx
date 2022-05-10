import styled from 'styled-components';

import { BaseContainer } from '.';

export const FlexColumn = styled(BaseContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled(BaseContainer)`
  position: relative;
  display: flex;
  flex-direction: row;
`;
