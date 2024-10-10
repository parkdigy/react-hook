import { ForwardedRef, useLayoutEffect } from 'react';

export function useForwardRef<T>(ref: ForwardedRef<T>, value: T) {
  useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else {
        ref.current = value;
      }
    }

    return () => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(null);
        } else {
          ref.current = null;
        }
      }
    };
  }, [ref, value]);
}

export default useForwardRef;
