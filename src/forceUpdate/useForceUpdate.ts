import { useState } from 'react';
import { useTimeoutRef } from '../timeoutInterval';

export function useForceUpdate(delayMilliseconds?: number) {
  const [, setDelayTimeout] = useTimeoutRef();
  const [, setValue] = useState(0);

  return (delay?: number) => {
    const finalDelay = delay ?? delayMilliseconds;
    if (finalDelay !== undefined) {
      setDelayTimeout(() => {
        setValue((old) => old + 1);
      }, finalDelay);
    } else {
      setValue((old) => old + 1);
    }
  };
}
