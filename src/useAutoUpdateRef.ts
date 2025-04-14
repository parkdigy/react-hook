import { RefObject, useRef } from 'react';
import useFirstSkipEffect from './useFirstSkipEffect';

export function useAutoUpdateRef<T>(value: T): RefObject<T> {
  const valueRef = useRef(value);

  useFirstSkipEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}

export default useAutoUpdateRef;
