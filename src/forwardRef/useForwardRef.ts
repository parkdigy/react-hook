import { ForwardedRef, useEffect } from 'react';

export function useForwardRef<T>(
  ref: ForwardedRef<T>,
  value: T,
  onSet?: (value: T) => void,
  onUnset?: () => void
): void {
  useEffect(() => {
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
