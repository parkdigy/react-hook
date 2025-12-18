import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';

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

  const setValue = (value: any) => {
    _setValue((prev) => {
      const nextValue = typeof value === 'function' ? value(prev) : value;
      valueRef.current = nextValue;
      return nextValue;
    });
  };

  return [valueRef, _value, setValue] as const;
}
