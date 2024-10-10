import { useCallback, useState } from 'react';
import useTimeoutRef from './useTimeoutRef';
import { ifUndefined } from '@pdg/util';

export function useForceUpdate(delayMilliseconds?: number) {
  const [, setDelayTimeout] = useTimeoutRef();
  const [, setValue] = useState(0);

  return useCallback((delay?: number) => {
    if (ifUndefined(delay, delayMilliseconds) !== undefined) {
      setDelayTimeout(
        () => {
          setValue((old) => old + 1);
        },
        ifUndefined(delay, delayMilliseconds)
      );
    } else {
      setValue((old) => old + 1);
    }
  }, []);
}

export default useForceUpdate;
