import { ILocalPassword } from '../@types/local-storage';


export enum AppStateActions {
  INIT_APP,
  UPDATE_STATUS,
  SET_LOADED_CLIENTS,
  SET_ACTIVE_CLIENT,
  LOAD_LOCAL_PASSWORDS
}

type InitAppAction = {
  type: AppStateActions.INIT_APP;
  payload: {
    loaded: boolean;
    clients: any[];
  };
};

type UpdateStatusAction = {
  type: AppStateActions.UPDATE_STATUS;
  payload: boolean;
};

type SetLoadedClientsAction = {
  type: AppStateActions.SET_LOADED_CLIENTS;
  payload: {
    name: string;
    color: string;
  }[];
};

type SetActiveClientAction = {
  type: AppStateActions.SET_ACTIVE_CLIENT;
  payload: string;
};

type SetLocalPasswordsAction = {
  type: AppStateActions.LOAD_LOCAL_PASSWORDS;
  payload: ILocalPassword[] | [];
};

export type AppStateDispatchActions =
  | InitAppAction
  | UpdateStatusAction
  | SetLoadedClientsAction
  | SetActiveClientAction
  | SetLocalPasswordsAction;
