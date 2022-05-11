import { Button } from '@components/atoms/Button/Button';
import { Block, FlexColumn } from '@molecules/Container';
import { Link } from 'react-router-dom';
import { TopMenu } from '../TopMenu';

export const SideNavbar = () => {
  return (
    <Block
      position="relative"
      width="320px"
      height="100%"
      backgroundColor="var(--gray-800)"
      alignItems="center"
      justifyContent="center"
      padding="1em">
      <TopMenu />
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
    </Block>
  );
};
