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

export const ButtonSubmit = styled(Button)`
  font-weight: bold;
  background-color: var(--blue-500);
  padding: 0.25em;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  & > * {
    margin: auto;
  }
`;
