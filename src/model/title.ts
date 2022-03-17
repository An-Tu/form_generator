import { StoreCreator } from 'src/shared';
import { makeGetSetMethods } from './utils';
import { ITitleModel } from './types';

export const make = (sc: StoreCreator): ITitleModel => {
  const store = sc('');

  return {
    ...makeGetSetMethods(store, (prevState, title) => title),
    subscribe: store.subscribe,
  };
};
