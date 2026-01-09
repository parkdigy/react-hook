import { type RefObject, useLayoutEffect, useRef } from 'react';

export function useAutoUpdateRef<T>(value: T): RefObject<T> {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
