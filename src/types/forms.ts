import { ReactNode } from 'react';

import { FormElemRef } from 'types/events';

interface IForm {
  id: string;
}

interface IFormParent extends IForm {
  children: ReactNode;
  handleSubmit: () => void;
}

interface IFormChild extends IForm {
  name: string;
  label: string;
  value: string;
  handleChange: (elemRef: FormElemRef) => void;
}

interface IFormDropdown extends IFormChild {
  options: {
    label: string;
    value: string;
  }[];
}

interface IFormTextInput extends IFormChild {
  placeholder?: string;
  required: boolean;
}

export type { IFormParent, IFormChild, IFormDropdown, IFormTextInput };
