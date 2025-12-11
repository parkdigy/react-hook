import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useFirstSkipEffect(effect: EffectCallback, deps?: DependencyList): void {
  const firstRef = useRef(true);
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
