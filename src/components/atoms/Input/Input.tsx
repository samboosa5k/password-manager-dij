import styled from 'styled-components';

export const BaseLabel = styled.label`
  display: inline-block;
  font-size: 0.85em;
  font-weight: bold;
  color: var(--blue-700);
  margin-bottom: 1em;
`;
export const BaseInput = styled.input<{ border?: string }>`
  ${({ border }) => border && `border: 3px solid ${border};`}
  border-radius: 4px;
  font-size: 1em;
  padding: 0.5em;
  &:focus {
    outline: none;
  }
`;
