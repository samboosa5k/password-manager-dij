import { ILocalPassword } from '../@types/local-storage';
import { Boolean3 } from '../@types/common';

export interface IClient {
  name: string;
  color: string; // hexcode
}

export type IClientList = IClient[];

export interface IAppState {
  loaded: Boolean3;
  clients: IClientList; // from pastebin fetch
  activeData: {
    client: string;
    localPasswords: ILocalPassword[] | []; // from local storage
  };
}

const initialAppState: IAppState = {
  loaded: 0,
  clients: [],
  activeData: {
    client: '',
    localPasswords: []
  }
};

export default initialAppState;
