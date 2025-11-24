import { SetStateAction, useCallback, useState } from 'react';
import { useFirstSkipEffect } from '../effect';
import { Func } from '@pdg/types';

// state 값만 받는 경우 (state 에 function 지정 불가)
export function useAutoUpdateState<
  T,
  V extends T extends Func ? never : T,
  Result = T extends Func ? never : [V, (value: SetStateAction<V>) => V],
>(state: T): Result;
// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)
export function useAutoUpdateState<
  T,
  V extends T extends Func ? never : T,
  Callback extends (state: V) => V,
  Result = T extends Func ? never : [V, (value: SetStateAction<V>, skipCallback?: boolean) => V],
>(state: T, callback: Callback): Result;
// 구현부
export function useAutoUpdateState(state: any, callback?: any) {
  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  useFirstSkipEffect(() => {
    _setValue(callback ? callback(state) : state);
  }, [state]);

  const setValue = useCallback(
    (newValue: any, skipCallback?: boolean) => {
      let finalNewValue = newValue;
      if (typeof finalNewValue === 'function') {
        _setValue((prev: any) => {
          finalNewValue = finalNewValue(prev);
          finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
          return finalNewValue;
        });
      } else {
        finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
        _setValue(finalNewValue);
      }
      return finalNewValue;
    },
    [callback]
  );

  return [_value, setValue];
}
