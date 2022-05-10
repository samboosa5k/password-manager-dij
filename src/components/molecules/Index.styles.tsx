/**
 * Common "Molecule" level snippets of styled.css``
 * Made very quickly just to separate the password sections
 * {@author Jasper Verbon}
 */

import styled from 'styled-components';

import { FlexColumn } from '@molecules/Container';
import { IThemedFunction } from 'types/styled-components';

// Label / Subtitle font style for content
// export const Card = styled(FlexColumn)<{success?: string}>`
//   background-color: ${({success}) => success ? "var(--white)" : "green"};
//   border-radius: 4px;
//   padding: 4px;
//   margin: auto;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

export const Card = styled(({ children, success }: IThemedFunction) => {
  return (
    <FlexColumn
      border="1px solid rgba(0,0,0,0.2)"
      borderRadius="4px"
      padding="1em"
      margin="auto auto 1em auto"
      backgroundColor={success ? 'var(--green-300)' : ''}>
      {children}
    </FlexColumn>
  );
})``;
