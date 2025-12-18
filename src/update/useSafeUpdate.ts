import { useMountedRef } from '../mount';

export function useSafeUpdate() {
  const mountedRef = useMountedRef();

  return (callback: () => void) => {
    if (mountedRef.current) {
      callback();
    }
  };
}
