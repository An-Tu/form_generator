import { ISubscrieble, IGetSet, Result } from 'src/shared';

interface ILabeled {
  label: string;
}

interface ITextItem extends ILabeled {
  type: 'text';
}

interface INumberItem extends ILabeled {
  type: 'number';
}

interface ITextareaItem extends ILabeled {
  type: 'textarea';
}

interface ICheckboxItem extends ILabeled {
  type: 'checkbox';
}

interface IDateItem extends ILabeled {
  type: 'date';
}

interface IRadioItem extends ILabeled {
  type: 'radio';
  options: string[];
}

interface IInvalidItem {
  type: 'invalid';
  raw: unknown;
}

export type Item =
  | ITextItem
  | INumberItem
  | ITextareaItem
  | ICheckboxItem
  | IDateItem
  | IRadioItem
  | IInvalidItem;

export interface IMaybeItem {
  type?: unknown;
  label?: unknown;
  options?: unknown;
}

export interface IConfig {
  title: Result<string>;
  items: Result<Item[]>;
  buttons: Result<string[]>;
}

export interface IFormItemsModel extends ISubscrieble, IGetSet<Item[]> {}

export interface ITitleModel extends ISubscrieble, IGetSet<string> {}

export interface IButtonsModel extends ISubscrieble, IGetSet<string[]> {}

export interface IConfigModel extends ISubscrieble, IGetSet<string> {
  clean: () => void;
  decode: () => void;
}

export type Err =
  | 'invalidJson'
  | 'emptyScheme'
  | 'invalidTitle'
  | 'invalidButtons'
  | 'invalidFormItems';

export interface IErrorModel extends ISubscrieble {
  setInvalidJson: () => void;
  setEmptyScheme: () => void;
  setInvalidTitle: () => void;
  setInvalidButtons: () => void;
  setInvalidFormItems: () => void;
  isInvalidJson: () => boolean;
  isEmptyScheme: () => boolean;
  isInvalidTitle: () => boolean;
  isInvalidButtons: () => boolean;
  isInvalidFormItems: () => boolean;
  isError: () => boolean;
  clean: () => void;
}
