import { ForwardedRef, useImperativeHandle, useEffect } from 'react';
import { useAutoUpdateRef } from '../ref';

export function useForwardRef<T>(
  ref: ForwardedRef<T>,
  value: T,
  onSet?: (value: T) => void,
  onUnset?: () => void
): void {
  const onSetRef = useAutoUpdateRef(onSet);
  const onUnsetRef = useAutoUpdateRef(onUnset);

  useImperativeHandle(ref, () => value, [value]);

  useEffect(() => {
    onSetRef.current?.(value);

    return () => {
      onUnsetRef.current?.();
      onUnsetRef.current = undefined;
    };
  }, [onSetRef, onUnsetRef, value]);
}
