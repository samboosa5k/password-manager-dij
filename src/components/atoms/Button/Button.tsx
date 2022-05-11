import styled from 'styled-components';

export const Button = styled.div`
  postion: relative;
  display: flex;
  width: 100%;
  background-color: var(--gray-900);
  margin: 0.5em 0;

  & > * {
    padding: 1em;
    color: white;
  }
`;
