import { useCallback, useState } from 'react';
import useTimeoutRef from './useTimeoutRef';

export function useForceUpdate(delayMilliseconds?: number) {
  const [, setDelayTimeout] = useTimeoutRef();
  const [, setValue] = useState(0);

  return useCallback(
    (delay?: number) => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delayMilliseconds]
  );
}

export default useForceUpdate;

/********************************************************************************************************************
 * ifUndefined
 * ******************************************************************************************************************/
function ifUndefined<TV, TNV>(v: TV | undefined, v2: TNV): TV | TNV {
  return v === undefined ? v2 : v;
}
