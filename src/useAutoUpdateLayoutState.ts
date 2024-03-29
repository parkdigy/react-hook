import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';

// state 값만 받는 경우 (state 에 function 지정 불가)
export default function useAutoUpdateLayoutState<T>(
  state: Exclude<T, (...args: any[]) => any>
): [T, Dispatch<SetStateAction<T>>];
// state 와 callback 함수를 받는 경우 (state 에 function 지정 불가)
export default function useAutoUpdateLayoutState<T = never, StateT = never>(
  state: Exclude<StateT, (...args: any[]) => any>,
  callback: (state: T | StateT) => T extends never ? StateT : T
): [T extends never ? StateT : T, Dispatch<SetStateAction<T extends never ? StateT : T>>];
// 구현부
export default function useAutoUpdateLayoutState(state: any, callback?: any) {
  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  useFirstSkipLayoutEffect(() => {
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
