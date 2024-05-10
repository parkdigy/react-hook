import { MutableRefObject, useRef } from 'react';
import { useFirstSkipEffect } from './index';

export default function useAutoUpdateRef<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef(value);

  useFirstSkipEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
