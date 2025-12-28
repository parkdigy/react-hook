import { DependencyList, EffectCallback, useEffect, useEffectEvent, useRef } from 'react';

export const useFirstSkipEffect = (effectEventCallback: EffectCallback, deps: DependencyList) => {
  {
    const effectEvent = useEffectEvent(effectEventCallback);
    const firstSkipRef = useRef(true);
    useEffect(() => {
      if (firstSkipRef.current) firstSkipRef.current = false;
      else return effectEvent();
      /* eslint-disable */
    }, deps);
    /* eslint-enable */
  }
};
