export interface IGetSet<T> {
  get: () => T;
  set: (c: T) => void;
}

export interface ISubscrieble {
  subscribe: (subscriber: () => void) => () => void;
}

export interface IStore<T> extends ISubscrieble {
  get: () => T;
  update: (fn: (prevState: T) => T) => void;
}

export type StoreCreator = <T>(state: T) => IStore<T>;

interface Ok<T> {
  type: 'ok';
  data: T;
}

interface Err {
  type: 'err';
}

export type Result<T> = Ok<T> | Err;

export const makeErr = (): Err => ({ type: 'err' });

export const makeOk = <T>(data: T): Ok<T> => ({ type: 'ok', data });

export const isErr = <T>(res: Result<T>): boolean => res.type === 'err';

export const getData = <T>(ok: Ok<T>): T => ok.data;
