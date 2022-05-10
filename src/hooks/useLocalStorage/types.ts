import { ILocalPassword } from 'types/local-storage';

export interface IManageLocalPassword {
  clientKey: string;
  passwordObj: ILocalPassword;
}
