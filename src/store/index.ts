import { StoreCreator } from 'src/shared';

export const make: StoreCreator = (initState) => {
  let state = initState;
  let subscribers: (() => void)[] = [];

  return {
    get: () => state,
    update: (updateFn) => {
      state = updateFn(state);
      subscribers.forEach((fn) => fn());
    },
    subscribe: (subscriber) => {
      subscribers.push(subscriber);
      return () => (subscribers = subscribers.filter((s) => s !== subscriber));
    },
  };
};
