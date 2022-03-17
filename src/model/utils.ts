import { IStore, IGetSet } from 'src/shared';

export const makeGetSetMethods = <T>(
  store: IStore<T>,
  updateFn: (prevState: T, newValue: T) => T,
): IGetSet<T> => ({
  get: store.get,
  set: (value) => store.update((prevState) => updateFn(prevState, value)),
});
