import { SetStateAction, useCallback, useState } from 'react';
import { useFirstSkipEffect } from '../effect';
import { Func } from '@pdg/types';

// state 값을 Function 으로 지정한 경우 (사용 불가)
export function useAutoUpdateState<T extends Func, Result = never>(state: T): Result;
// state 값만 받는 경우 (state 에 function 지정 불가)
export function useAutoUpdateState<T, Result = [T, (value: SetStateAction<T>) => T]>(state: T): Result;
// state 값을 Function 으로 지정한 경우 (사용 불가)
export function useAutoUpdateState<T extends Func, Callback extends (state: never) => never, Result = never>(
  state: T,
  callback: Callback
): Result;
// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)
export function useAutoUpdateState<
  T,
  TCallbackValue,
  TCallbackResult,
  Result = [TCallbackResult, (value: SetStateAction<TCallbackValue>, skipCallback?: boolean) => TCallbackResult],
>(state: T, callback: (state: TCallbackValue) => TCallbackResult): Result;
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
