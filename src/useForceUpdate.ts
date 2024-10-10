import { useCallback, useState } from 'react';
import useTimeoutRef from './useTimeoutRef';

export function useForceUpdate(delay?: number) {
  const [, setDelayTimeout] = useTimeoutRef();
  const [, setValue] = useState(0);

  return useCallback(() => {
    if (delay) {
      setDelayTimeout(() => {
        setValue((old) => old + 1);
      }, delay);
    } else {
      setValue((old) => old + 1);
    }
  }, []);
}

export default useForceUpdate;
