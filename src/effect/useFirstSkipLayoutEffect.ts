import { DependencyList, EffectCallback, useEffectEvent, useLayoutEffect, useRef } from 'react';

export const useFirstSkipLayoutEffect = (effectEventCallback: EffectCallback, deps: DependencyList) => {
  {
    const effectEvent = useEffectEvent(effectEventCallback);
    const firstSkipRef = useRef(true);
    useLayoutEffect(
      () => {
        if (firstSkipRef.current) firstSkipRef.current = false;
        else return effectEvent();
      },
      /* eslint-disable */
      deps
      /* eslint-enable */
    );
  }
};
