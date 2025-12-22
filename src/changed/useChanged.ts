import { useState } from 'react';

export const useChanged = (value: unknown, initial = false) => {
  const [prevValue, setPrevValue] = useState(typeof value === 'function' ? () => value : value);
  const [isFirst, setIsFirst] = useState(true);

  if (initial) {
    if (isFirst) {
      setIsFirst(false);
      return true;
    }
  }

  let changed = false;
  if (value !== prevValue) {
    setPrevValue(typeof value === 'function' ? () => value : value);
    changed = true;
  }
  return changed;
};
