import { StoreCreator } from 'src/shared';
import { Item, IFormItemsModel } from './types';
import { makeGetSetMethods } from './utils';

export const make = (sc: StoreCreator): IFormItemsModel => {
  const store = sc([] as Item[]);

  return {
    ...makeGetSetMethods(store, (prevState, items) => items),
    subscribe: store.subscribe,
  };
};
