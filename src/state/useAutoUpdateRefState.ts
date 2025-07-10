import { RefObject, SetStateAction, useCallback, useRef, useState } from 'react';
import { useFirstSkipEffect } from '../effect';

// state 값만 받는 경우 (state 에 function 지정 불가)
export function useAutoUpdateRefState<T>(
  state: Exclude<T, (...args: any[]) => any>
): [RefObject<T>, T, (value: SetStateAction<T>) => T];
// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)
export function useAutoUpdateRefState<T>(
  state: Exclude<T, (...args: any[]) => any>,
  callback: (state: T) => T
): [RefObject<T>, T, (value: SetStateAction<T>, skipCallback?: boolean) => T];
// state 와 callback 함수를 받는 경우 (state 에 function 지정 불가)
export function useAutoUpdateRefState<T = never, StateT = never>(
  state: Exclude<StateT, (...args: any[]) => any>,
  callback: (state: T | StateT) => T extends never ? StateT : T
): [
  RefObject<T extends never ? StateT : T>,
  T extends never ? StateT : T,
  (value: SetStateAction<T | StateT>, skipCallback?: boolean) => T extends never ? StateT : T,
];
// 구현부
export function useAutoUpdateRefState(state: any, callback?: any) {
  const valueRef = useRef(callback ? callback(state) : state);
  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  useFirstSkipEffect(() => {
    const newValue = callback ? callback(state) : state;
    if (!equal(valueRef.current, newValue)) {
      valueRef.current = newValue;
      _setValue(newValue);
    }
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
      valueRef.current = finalNewValue;
      return finalNewValue;
    },
    [callback]
  );

  return [valueRef, _value, setValue];
}

/********************************************************************************************************************
 * equal
 * ******************************************************************************************************************/
function equal(v1: any, v2: any): boolean {
  if (v1 === v2) return true;
  if (typeof v1 !== typeof v2) return false;
  if (v1 == null || v2 == null) return false;
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return JSON.stringify(v1) === JSON.stringify(v2);
  } else {
    return v1 === v2;
  }
}
