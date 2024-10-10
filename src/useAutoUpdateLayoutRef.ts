import { MutableRefObject, useRef } from 'react';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';

export function useAutoUpdateLayoutRef<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef(value);

  useFirstSkipLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}

export default useAutoUpdateLayoutRef;
