import { DependencyList, EffectCallback, useEffect, useEffectEvent } from 'react';

export const useEventEffect = (effectEventCallback: EffectCallback, deps?: DependencyList) => {
  {
    const effectEvent = useEffectEvent(effectEventCallback);
    useEffect(
      () => effectEvent(),
      /* eslint-disable */
      deps
    );
    /* eslint-enable */
  }
};
