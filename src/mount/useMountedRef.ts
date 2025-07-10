import { RefObject, useEffect, useRef } from 'react';

export function useMountedRef(initialValue = true): RefObject<boolean> {
  const isMountedRef = useRef(initialValue);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}
