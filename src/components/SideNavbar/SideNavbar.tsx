import { Link } from 'react-router-dom';
import { Flex as NavbarContainer } from '@components/Container';
import { Button } from '../Button';
// import { TopMenu } from '../TopMenu';

export const SideNavbar = () => {
  return (
    <NavbarContainer
      flexDirection={'column'}
      flex={1}
      maxWidth={'320px'}
      padding="1em"
      margin={'0 auto auto auto'}>
      {/*<TopMenu />*/}
      <Button>
        <Link style={{ textDecoration: 'none' }} to="/">
          Password Overview
        </Link>
      </Button>
      <Button>
        <Link style={{ textDecoration: 'none' }} to="/add">
          Add Password
        </Link>
      </Button>
    </NavbarContainer>
  );
};
