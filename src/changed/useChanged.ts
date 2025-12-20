import { useState } from 'react';

export const useChanged = (value: unknown, initial = false) => {
  const [prevValue, setPrevValue] = useState(
    initial ? (value === undefined ? null : undefined) : typeof value === 'function' ? () => value : value
  );
  let changed = false;
  if (value !== prevValue) {
    setPrevValue(typeof value === 'function' ? () => value : value);
    changed = true;
  }
  return changed;
};
