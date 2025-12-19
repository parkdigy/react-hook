import { useState } from 'react';

export const useChanged = (value: unknown, initial = false) => {
  const [prevValue, setPrevValue] = useState(initial ? (value === undefined ? null : undefined) : value);
  let changed = false;
  if (value !== prevValue) {
    setPrevValue(value);
    changed = true;
  }
  return changed;
};
