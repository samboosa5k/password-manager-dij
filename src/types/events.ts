import { ChangeEvent, MutableRefObject } from 'react';

export type FormEvent = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export type FormElemRef = MutableRefObject<
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | HTMLButtonElement
  | any
>;
