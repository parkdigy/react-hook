import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
export function useSafeState<S>(
  initialState?: S | (() => S)
): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const mountedRef = useRef(false);
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const safeSetValue = useCallback((newValue: any) => {
    if (mountedRef.current) {
      setValue(newValue);
    }
  }, []);

  return [value, safeSetValue] as const;
}
