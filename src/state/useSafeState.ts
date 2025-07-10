import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useMountedRef } from '../mount';

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
function useSafeState<S>(initialState?: S | (() => S)): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const mountedRef = useMountedRef();
  const [value, setValue] = useState(initialState);

  const safeSetValue = useCallback((newValue: any) => {
    if (mountedRef.current) {
      setValue(newValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, safeSetValue];
}
