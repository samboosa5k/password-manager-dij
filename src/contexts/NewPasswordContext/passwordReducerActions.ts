export enum PasswordStateActions {
  UPDATE_CLIENT,
  UPDATE_REFERENCE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_CONFIRMATION,
  RESET_FORM
}

type UpdateClientAction = {
  type: PasswordStateActions.UPDATE_CLIENT;
  payload: string;
};

type UpdateReferenceAction = {
  type: PasswordStateActions.UPDATE_REFERENCE;
  payload: string;
};

type UpdatePasswordAction = {
  type: PasswordStateActions.UPDATE_PASSWORD;
  payload: string;
};

type UpdatePasswordConfirmationAction = {
  type: PasswordStateActions.UPDATE_PASSWORD_CONFIRMATION;
  payload: string;
};

type ResetFormAction = {
  type: PasswordStateActions.RESET_FORM;
};

export type PasswordDispatchActions =
  | UpdateClientAction
  | UpdateReferenceAction
  | UpdatePasswordAction
  | UpdatePasswordConfirmationAction
  | ResetFormAction;
