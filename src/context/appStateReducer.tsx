import { IAppState } from './initialAppState';
import { AppStateActions, AppStateDispatchActions } from './AppStateActions';


type AppStateReducer = (
  state: IAppState,
  action: AppStateDispatchActions
) => IAppState;

export const appStateReducer:AppStateReducer = (
  state: IAppState,
  action: AppStateDispatchActions
): IAppState => {
  switch (action.type) {
    case AppStateActions.UPDATE_STATUS:
      return {
        ...state,
        loaded: action.payload
      };
    case AppStateActions.SET_LOADED_CLIENTS:
      return {
        ...state,
        loaded: 1,
        clients: action.payload
      };
    case AppStateActions.SET_ACTIVE_CLIENT:
      return {
        ...state,
        activeData: {
          ...state.activeData,
          client: action.payload
        }
      };
    case AppStateActions.LOAD_LOCAL_PASSWORDS:
      return {
        ...state,
        activeData: {
          ...state.activeData,
          localPasswords: action.payload
        }
      };

    default:
      return state;
  }
};
