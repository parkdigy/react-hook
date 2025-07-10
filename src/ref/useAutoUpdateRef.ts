import { RefObject, useRef, useState } from 'react';
import { useFirstSkipEffect } from '../effect';

export function useAutoUpdateRef<T>(value: T): RefObject<T> {
  const valueRef = useRef(value);
  const [, setUpdateValue] = useState(0);

  useFirstSkipEffect(() => {
    valueRef.current = value;
    setUpdateValue((prev) => prev + 1);
  }, [value]);

  return valueRef;
}
