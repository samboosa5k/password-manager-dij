export interface IPasswordState {
  client: string;
  reference: string;
  password: string;
  passwordConfirm: string;
}

export interface INewPasswordState extends IPasswordState {
  passwordConfirm: string;
}
