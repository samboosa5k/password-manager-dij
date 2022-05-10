export interface IPasswordState {
  client: string;
  reference: string;
  password: string;
}

export interface INewPasswordState extends IPasswordState {
  passwordConfirm: string;
}

// For another time...
// export interface ICredentialStorage extends IPasswordState {
//   passwordHash: string;
//   passwordSalt: string;
// }
