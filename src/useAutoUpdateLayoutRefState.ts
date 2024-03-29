import { Dispatch, MutableRefObject, SetStateAction, useCallback, useRef, useState } from 'react';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';
import { equal } from '@pdg/util';

export default function useAutoUpdateLayoutRefState<T>(state: T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutRefState<T>(
  state: T,
  callback: (state: T) => T
): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutRefState<T>(
  callback: () => T
): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutRefState(p1: any, p2?: any) {
  const state = typeof p1 === 'function' ? undefined : p1;
  const callback = typeof p1 === 'function' ? p1 : p2;

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
      const finalNewValue = callback ? callback(newValue) : newValue;
      valueRef.current = finalNewValue;
      _setValue(finalNewValue);
    },
    [callback]
  );

  return [valueRef, _value, setValue];
}
