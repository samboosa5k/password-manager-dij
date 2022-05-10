import { Boolean3 } from 'types/common';
import { IlocalPasswords } from 'types/local-storage';

export enum AppStateActions {
  UPDATE_STATUS,
  SET_LOADED_CLIENTS,
  SET_ACTIVE_CLIENT,
  LOAD_LOCAL_PASSWORDS
}

type UpdateStatusAction = {
  type: AppStateActions.UPDATE_STATUS;
  payload: Boolean3;
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
  payload: IlocalPasswords[] | [];
};

export type AppStateDispatchActions =
  | UpdateStatusAction
  | SetLoadedClientsAction
  | SetActiveClientAction
  | SetLocalPasswordsAction;
