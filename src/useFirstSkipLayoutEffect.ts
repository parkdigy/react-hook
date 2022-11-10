import { DependencyList, EffectCallback, useLayoutEffect, useRef } from 'react';

export default function useFirstSkipLayoutEffect(effect: EffectCallback, deps?: DependencyList): void {
  const firstRef = useRef(true);
  useLayoutEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      effect();
    }
  }, deps);
}
