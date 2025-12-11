import { useCallback } from 'react';
import { useMountedRef } from '../mount';

export function useSafeUpdate() {
  const mountedRef = useMountedRef();

  return useCallback((callback: () => void) => {
    if (mountedRef.current) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
