import { useState } from 'react';
import { useEventEffect } from '../effect';

export function useMounted(initialValue = true): boolean {
  const [isMounted, setIsMounted] = useState(initialValue);

  useEventEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  });

  return isMounted;
}
