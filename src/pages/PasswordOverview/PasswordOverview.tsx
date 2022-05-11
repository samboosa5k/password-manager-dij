import { useMemo } from 'react';

import DefaultPage from '@components/templates/Page/Default';

import { useAppState } from 'contexts';
import { isDefined } from 'utils/value-checks';

import { PasswordGroups } from './PasswordGroups';

// The overview page
export const PasswordOverview = () => {
  const { appState, dispatch } = useAppState();

  const clientList = useMemo(() => {
    const { clients } = appState;
    return clients;
  }, [appState]);

  return (
    <DefaultPage title="Password Overview">
      {isDefined(clientList) && clientList.length > 0 ? (
        <PasswordGroups clients={clientList} />
      ) : null}
    </DefaultPage>
  );
};
