import { useCallback, useEffect, useRef } from 'react';

export function useSafeUpdate() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback((callback: () => void) => {
    if (mountedRef.current) {
      callback();
    }
  }, []);
}
