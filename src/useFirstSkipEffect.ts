import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useFirstSkipEffect(effect: EffectCallback, deps?: DependencyList): void {
  const firstRef = useRef(true);
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      effect();
    }
  }, deps);
}
