import { Dispatch, RefObject, SetStateAction, useCallback, useRef, useState } from 'react';

export function useRefState<S>(initialState: S | (() => S)): [RefObject<S>, S, Dispatch<SetStateAction<S>>];
export function useRefState<S = undefined>(): [
  RefObject<S | undefined>,
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
];
export function useRefState<S>(
  initialState?: S | (() => S)
): [RefObject<S | undefined>, S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const [_value, _setValue] = useState(initialState);
  const valueRef = useRef(_value);

  const setValue = useCallback((value: any) => {
    if (typeof value === 'function') {
      _setValue((prev) => {
        const finalValue = value(prev);
        valueRef.current = finalValue;
        return finalValue;
      });
    } else {
      valueRef.current = value;
      _setValue(value);
    }
  }, []);

  return [valueRef, _value, setValue];
}
