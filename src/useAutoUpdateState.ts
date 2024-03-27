import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import useFirstSkipEffect from './useFirstSkipEffect';

export default function useAutoUpdateState<T>(state: T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(state: T, callback: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(callback: () => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState(p1: any, p2?: any) {
  const state = typeof p1 === 'function' ? undefined : p1;
  const callback = typeof p1 === 'function' ? p1 : p2;

  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  useFirstSkipEffect(() => {
    _setValue(callback ? callback(state) : state);
  }, [state, callback]);

  const setValue = useCallback(
    (newValue: any) => {
      _setValue(callback ? callback(newValue) : newValue);
    },
    [callback]
  );

  return [_value, setValue];
}
