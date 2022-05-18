import { IChild } from './common';

export interface IThemedFunction extends IChild {
  id?: string;
  success?: boolean | null;
}
