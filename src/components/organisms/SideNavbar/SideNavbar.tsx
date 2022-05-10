import { Link } from 'react-router-dom';

import { H2 } from '@components/atoms';
import { ButtonBase } from '@components/atoms/Button/Button';
import { FlexColumn } from '@molecules/Container';

export const SideNavbar = () => {
  return (
    <FlexColumn
      flex="0"
      minWidth="25%"
      maxWidth="256px"
      padding="1em"
      backgroundColor="var(--gray-900 )">
      <ButtonBase>
        <H2>
          <Link style={{ textDecoration: 'none' }} to="/">
            Password Overview
          </Link>
        </H2>
      </ButtonBase>
      <ButtonBase>
        <H2>
          {' '}
          <Link style={{ textDecoration: 'none' }} to="/add">
            Add Password
          </Link>
        </H2>
      </ButtonBase>
    </FlexColumn>
  );
};
