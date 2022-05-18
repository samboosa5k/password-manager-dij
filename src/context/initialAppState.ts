import { ILocalPassword } from '../@types/local-storage';
import { Boolean3 } from '../@types/common';

export interface IClient {
  name: string;
  color: string; // hexcode
}

export type IClientList = IClient[];

export interface IAppState {
  loaded: boolean;
  clients: IClientList; // from pastebin fetch
  activeData: {
    client: string;
    localPasswords: ILocalPassword[] | []; // from local storage
  };
}

const initialAppState: IAppState = {
  loaded: false,
  clients: [],
  activeData: {
    client: '',
    localPasswords: []
  }
};

export default initialAppState;
