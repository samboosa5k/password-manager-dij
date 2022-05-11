import styled, { CSSProperties } from 'styled-components';

type IColor = Pick<CSSProperties, 'color' | 'fontSize' | 'fontWeight'>;

export const H1 = styled.h1<IColor>`
  font-size: ${({ fontSize }) => fontSize || '1.5em'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  margin: 0;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : 'black')};
  // letter-spacing: 0.05em;
`;

export const H2 = styled.h2<IColor>`
  font-size: ${({ fontSize }) => fontSize || '1.25em'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  margin: 0;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : 'black')};
  // letter-spacing: 0.05em;
`;

export const H3 = styled.h3<IColor>`
  font-size: ${({ fontSize }) => fontSize || '1em'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  margin: 0.2em 0;
  // text-transform: uppercase;
  color: ${({ color }) => (color ? color : 'black')};
  letter-spacing: normal;
`;
