import { Block, FlexRow } from '@components/molecules';
import ClientPasswordGroup from '@components/organisms/ClientPasswordGroups';

import { IAppState, IClient } from 'contexts';
import { isDefined } from 'utils/value-checks';

// Generate a grouped list of passwords per client
export const ClientPasswordGroupList = ({
  clients
}: Pick<IAppState, 'clients'>) => {
  return (
    <Block maxWidth="512px">
      {isDefined(clients) &&
        clients.length > 0 &&
        clients.map((client: IClient, idx: number) => (
          <ClientPasswordGroup client={client} />
        ))}
    </Block>
  );
};
