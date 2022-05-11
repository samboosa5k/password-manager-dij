export interface ILocalPassword {
  reference: string;
  password: string;
}

export interface IClientPasswordList {
  client: string;
  localPasswords: ILocalPassword[] | [];
}
