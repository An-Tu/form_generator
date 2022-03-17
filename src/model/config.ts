import { Result, StoreCreator, makeErr, makeOk } from 'src/shared';
import {
  Item,
  IMaybeItem,
  IConfig,
  IFormItemsModel,
  IButtonsModel,
  ITitleModel,
  IConfigModel,
  IErrorModel,
} from './types';
import { makeGetSetMethods } from './utils';

const decodeArray = <T>(
  data: unknown,
  elemDecoder: (elem: unknown) => Result<T>,
): Result<T[]> => {
  if (!Array.isArray(data)) {
    return makeErr();
  }
  const res: T[] = [];
  for (const elem of data) {
    const decodedElem = elemDecoder(elem);
    if (decodedElem.type === 'err') {
      return makeErr();
    }
    res.push(decodedElem.data);
  }
  return makeOk(res);
};

const decodeStr = (data: unknown): Result<string> => {
  if (typeof data !== 'string') {
    return makeErr();
  }
  return makeOk(data);
};

const decodeItem = (data: unknown): Result<Item> => {
  if (typeof data !== 'object' || Array.isArray(data) || data === null) {
    return makeOk({
      type: 'invalid',
      raw: data,
    });
  }

  const maybeItem = data as IMaybeItem;

  switch (maybeItem.type) {
    case 'text':
    case 'number':
    case 'textarea':
    case 'checkbox':
    case 'date':
      if (typeof maybeItem.label === 'string') {
        return makeOk({
          type: maybeItem.type,
          label: maybeItem.label,
        });
      }
      return makeOk({
        type: 'invalid',
        raw: data,
      });
    case 'radio':
      if (
        typeof maybeItem.label === 'string' &&
        Array.isArray(maybeItem.options) &&
        maybeItem.options.every((option) => typeof option === 'string')
      ) {
        return makeOk({
          type: maybeItem.type,
          label: maybeItem.label,
          options: maybeItem.options,
        });
      }
      return makeOk({
        type: 'invalid',
        raw: data,
      });
    default:
      return makeOk({
        type: 'invalid',
        raw: data,
      });
  }
};

const decode = (str: string): Result<IConfig> => {
  try {
    const data = JSON.parse(str);

    return makeOk({
      title: decodeStr(data.title),
      buttons: decodeArray(data.buttons, decodeStr),
      items: decodeArray(data.items, decodeItem),
    });
  } catch (err) {
    console.error(err);
    return makeErr();
  }
};

export const make = (
  sc: StoreCreator,
  formItemsModel: IFormItemsModel,
  titleModel: ITitleModel,
  buttonsModel: IButtonsModel,
  errorModel: IErrorModel,
): IConfigModel => {
  const store = sc('');

  return {
    ...makeGetSetMethods(store, (prevState, value) => value),
    subscribe: store.subscribe,
    clean: () => store.update(() => ''),
    decode: () => {
      const data = store.get();
      if (data.length === 0) {
        errorModel.setEmptyScheme();
        return;
      }
      const res = decode(data);
      if (res.type === 'err') {
        errorModel.setInvalidJson();
        return;
      }
      const config = res.data;
      if (config.title.type === 'err') {
        errorModel.setInvalidTitle();
        return;
      }
      titleModel.set(config.title.data);

      if (config.buttons.type === 'err') {
        errorModel.setInvalidButtons();
        return;
      }
      buttonsModel.set(config.buttons.data);

      if (config.items.type === 'err') {
        errorModel.setInvalidFormItems();
        return;
      }
      formItemsModel.set(config.items.data);
    },
  };
};
