import { IClient } from 'contexts';
import { ILocalPassword } from 'types/local-storage';

export interface IClientContainer {
  client: IClient;
  localPasswords?: ILocalPassword[];
}
