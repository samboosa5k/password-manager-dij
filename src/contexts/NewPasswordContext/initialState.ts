export interface IPasswordState {
  client: string;
  reference: string;
  password: string;
  passwordConfirm: string;
}

const initialPasswordState: IPasswordState = {
  client: '',
  reference: '',
  password: '',
  passwordConfirm: ''
};

export default initialPasswordState;
