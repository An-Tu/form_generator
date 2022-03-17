import { StoreCreator } from 'src/shared';
import { makeGetSetMethods } from './utils';
import { IButtonsModel } from './types';

export const make = (sc: StoreCreator): IButtonsModel => {
  const store = sc([] as string[]);

  return {
    ...makeGetSetMethods(store, (prevState, buttons) => buttons),
    subscribe: store.subscribe,
  };
};
