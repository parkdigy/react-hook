import { ForwardedRef, useLayoutEffect } from 'react';

export function useForwardLayoutRef<T>(
  ref: ForwardedRef<T>,
  value: T,
  onSet?: (value: T) => void,
  onUnset?: () => void
): void {
  useLayoutEffect(() => {
    onSet?.(value);

    if (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else {
        ref.current = value;
      }
    }

    return () => {
      onUnset?.();

      if (ref) {
        if (typeof ref === 'function') {
          ref(null);
        } else {
          ref.current = null;
        }
      }
    };
  }, [onSet, onUnset, ref, value]);
}
