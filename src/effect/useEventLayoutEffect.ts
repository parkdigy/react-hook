import { type DependencyList, type EffectCallback, useEffectEvent, useLayoutEffect } from 'react';

export const useEventLayoutEffect = (effectEventCallback: EffectCallback, deps?: DependencyList) => {
  {
    const effectEvent = useEffectEvent(effectEventCallback);
    useLayoutEffect(
      () => effectEvent(),
      /* eslint-disable */
      deps
      /* eslint-enable */
    );
  }
};
