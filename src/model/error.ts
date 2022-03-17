import { IStore, StoreCreator } from 'src/shared';
import { Err, IErrorModel } from './types';

const isError = (store: IStore<Err | null>) => store.get() !== null;

const makeIsErrorMethod = (store: IStore<Err | null>, e: Err | null) => () =>
  store.get() === e;

const makeSetErrorMethod = (store: IStore<Err | null>, e: Err | null) => () =>
  store.update(() => e);

export const make = (sc: StoreCreator): IErrorModel => {
  const store = sc(null as null | Err);

  return {
    setInvalidJson: makeSetErrorMethod(store, 'invalidJson'),
    setEmptyScheme: makeSetErrorMethod(store, 'emptyScheme'),
    setInvalidTitle: makeSetErrorMethod(store, 'invalidTitle'),
    setInvalidButtons: makeSetErrorMethod(store, 'invalidButtons'),
    setInvalidFormItems: makeSetErrorMethod(store, 'invalidFormItems'),
    isInvalidJson: makeIsErrorMethod(store, 'invalidJson'),
    isEmptyScheme: makeIsErrorMethod(store, 'emptyScheme'),
    isInvalidTitle: makeIsErrorMethod(store, 'invalidTitle'),
    isInvalidButtons: makeIsErrorMethod(store, 'invalidButtons'),
    isInvalidFormItems: makeIsErrorMethod(store, 'invalidFormItems'),
    isError: () => isError(store),
    clean: () => {
      if (isError(store)) {
        store.update(() => null);
      }
    },
    subscribe: store.subscribe,
  };
};
