import { MutableRefObject, useRef } from 'react';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';

export default function useAutoUpdateLayoutRef<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef(value);

  useFirstSkipLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
