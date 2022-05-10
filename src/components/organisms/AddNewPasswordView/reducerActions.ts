export enum FormActions {
  UPDATE_CLIENT,
  UPDATE_REFERENCE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_CONFIRMATION,
  RESET_FORM
}

type UpdateClientAction = {
  type: FormActions.UPDATE_CLIENT;
  payload: string;
};

type UpdateReferenceAction = {
  type: FormActions.UPDATE_REFERENCE;
  payload: string;
};

type UpdatePasswordAction = {
  type: FormActions.UPDATE_PASSWORD;
  payload: string;
};

type UpdatePasswordConfirmationAction = {
  type: FormActions.UPDATE_PASSWORD_CONFIRMATION;
  payload: string;
};

type ResetFormAction = {
  type: FormActions.RESET_FORM;
};

export type NewPasswordActions =
  | UpdateClientAction
  | UpdateReferenceAction
  | UpdatePasswordAction
  | UpdatePasswordConfirmationAction
  | ResetFormAction;
