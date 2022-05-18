import { Button } from '../Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { TopMenu } from '../TopMenu';


const Container = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;
`;


export const SideNavbar = () => {
  return (
    <Container
>
      {/*<TopMenu />*/}
      <Button>
        <Link style={{ textDecoration: 'none' }} to='/'>
          Password Overview
        </Link>
      </Button>
      <Button>
        <Link style={{ textDecoration: 'none' }} to='/add'>
          Add Password
        </Link>
      </Button>
    </Container>
  );
};
