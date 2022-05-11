import { useMemo } from 'react';

import { Block } from '@components/molecules';
import ClientPasswordGroup from '@components/organisms/ClientPasswordGroups';
import DefaultPage from '@components/templates/Page/Default';

import { IAppState, IClient, useAppState } from 'contexts';
import { isDefined } from 'utils/value-checks';

import { ClientPasswordGroupList } from './PasswordGroups';

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
        <ClientPasswordGroupList clients={clientList} />
      ) : null}
    </DefaultPage>
  );
};