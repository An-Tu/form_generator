import {
  Context,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { IModel } from 'src/model';
import { ISubscrieble } from 'src/shared';

const ModelContext = createContext(null) as Context<null | IModel>;

interface ModelProviderProps {
  children: JSX.Element;
  model: IModel;
}

export const ModelProvider = (props: ModelProviderProps) => (
  <ModelContext.Provider value={props.model}>
    {props.children}
  </ModelContext.Provider>
);

export const useModel = (): IModel => {
  const model = useContext(ModelContext);

  if (model === null) {
    throw new Error(
      "Model doesn't find to the ModelContext. Please check that you use the ModelProvider",
    );
  }

  return model;
};

interface IGetFromModel<T> extends ISubscrieble {
  get: () => T;
}

interface IGetWithParamsFromModel<T, P> extends ISubscrieble {
  get: (params: P) => T;
}

export const useSelector = <T,>(model: IGetFromModel<T>): T => {
  const [state, setState] = useState(0);

  const { get, subscribe } = model;

  useLayoutEffect(() => {
    const forceUpdate = () => setState((s) => s + 1);
    const unsubscribe = subscribe(forceUpdate);
    forceUpdate();

    return unsubscribe;
  }, [subscribe]);

  return useMemo(get, [get, state]);
};

export const useSelectorWithParams = <T, P>(
  model: IGetWithParamsFromModel<T, P>,
  params: P,
): T => {
  const [state, setState] = useState(0);

  const { get, subscribe } = model;

  useLayoutEffect(() => {
    const forceUpdate = () => setState((s) => s + 1);
    const unsubscribe = subscribe(forceUpdate);
    forceUpdate();

    return unsubscribe;
  }, [subscribe]);

  return useMemo(() => get(params), [get, params, state]);
};

export const useMakeSelector = <T,>(
  get: () => T,
  subscribe: (subscriber: () => void) => () => void,
): IGetFromModel<T> =>
  useMemo(
    () => ({
      get,
      subscribe,
    }),
    [],
  );
