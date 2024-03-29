import { MutableRefObject, SetStateAction, useCallback, useRef, useState } from 'react';
import { equal } from '@pdg/util';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';

// state 값만 받는 경우 (state 에 function 지정 불가)
export default function useAutoUpdateLayoutRefState<T>(
  state: Exclude<T, (...args: any[]) => any>
): [MutableRefObject<T>, T, (value: SetStateAction<T>) => T];
// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)
export default function useAutoUpdateLayoutRefState<T>(
  state: Exclude<T, (...args: any[]) => any>,
  callback: (state: T) => T
): [MutableRefObject<T>, T, (value: SetStateAction<T>) => T];
// state 와 callback 함수를 받는 경우 (state 에 function 지정 불가)
export default function useAutoUpdateLayoutRefState<T = never, StateT = never>(
  state: Exclude<StateT, (...args: any[]) => any>,
  callback: (state: T | StateT) => T extends never ? StateT : T
): [
  MutableRefObject<T extends never ? StateT : T>,
  T extends never ? StateT : T,
  (value: SetStateAction<T extends never ? StateT : T>) => T extends never ? StateT : T,
];
// 구현부
export default function useAutoUpdateLayoutRefState(state: any, callback?: any) {
  const valueRef = useRef(callback ? callback(state) : state);
  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  useFirstSkipLayoutEffect(() => {
    const newValue = callback ? callback(state) : state;
    if (!equal(valueRef.current, newValue)) {
      valueRef.current = newValue;
      _setValue(newValue);
    }
  }, [state, callback]);

  const setValue = useCallback(
    (newValue: any) => {
      let finalNewValue = newValue;
      if (typeof finalNewValue === 'function') {
        _setValue((prev: any) => {
          finalNewValue = finalNewValue(prev);
          finalNewValue = callback ? callback(finalNewValue) : finalNewValue;
          return finalNewValue;
        });
      } else {
        finalNewValue = callback ? callback(finalNewValue) : finalNewValue;
        _setValue(finalNewValue);
      }
      valueRef.current = finalNewValue;
      return finalNewValue;
    },
    [callback]
  );

  return [valueRef, _value, setValue];
}
