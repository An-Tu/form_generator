import { StoreCreator } from 'src/shared';
import {
  IButtonsModel,
  IFormItemsModel,
  ITitleModel,
  IConfigModel,
  IErrorModel,
} from './types';
import { make as formItemsModelMake } from './form_items';
import { make as titleModelMake } from './title';
import { make as buttonsModelMake } from './buttons';
import { make as configModelMake } from './config';
import { make as errorModelMake } from './error';

export interface IModel {
  formItemsModel: IFormItemsModel;
  titleModel: ITitleModel;
  buttonsModel: IButtonsModel;
  errorModel: IErrorModel;
  configModel: IConfigModel;
}

export const make = (sc: StoreCreator): IModel => {
  const formItemsModel = formItemsModelMake(sc);
  const titleModel = titleModelMake(sc);
  const buttonsModel = buttonsModelMake(sc);
  const errorModel = errorModelMake(sc);

  return {
    formItemsModel,
    titleModel,
    buttonsModel,
    errorModel,
    configModel: configModelMake(
      sc,
      formItemsModel,
      titleModel,
      buttonsModel,
      errorModel,
    ),
  };
};
