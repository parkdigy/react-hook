import { RefObject, useEffect, useRef } from 'react';

export function useMountedRef(initialValue = true): RefObject<boolean> {
  const isMountedRef = useRef(initialValue);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}
