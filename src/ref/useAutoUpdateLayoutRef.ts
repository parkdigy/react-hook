import { RefObject, useRef, useState } from 'react';
import { useFirstSkipLayoutEffect } from '../effect';

export function useAutoUpdateLayoutRef<T>(value: T): RefObject<T> {
  const valueRef = useRef(value);
  const [, setUpdateValue] = useState(0);

  useFirstSkipLayoutEffect(() => {
    valueRef.current = value;
    setUpdateValue((prev) => prev + 1);
  }, [value]);

  return valueRef;
}
