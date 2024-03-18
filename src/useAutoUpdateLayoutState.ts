import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import useFirstSkipLayoutEffect from './useFirstSkipLayoutEffect';
import { equal } from '@pdg/util';

export function AA<T>(a: T): T;
export function AA<T>(a: any): T {
  return a;
}

export default function useAutoUpdateLayoutState<T>(
  state: T,
  finalStateCallback?: (state: T) => T
): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutState<T>(
  finalStateCallback: (State: T) => T
): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutState<T>(p1: any, p2?: any): [T, Dispatch<SetStateAction<T>>] {
  const state = typeof p1 === 'function' ? undefined : p1;
  const finalStateCallback = typeof p1 === 'function' ? p1 : p2;

  const [, setUpdateKey] = useState(0);

  const [_initState] = useState<T>(() => {
    return finalStateCallback ? finalStateCallback(state, 0) : state;
  });

  const _state = useRef<T>(_initState);

  const forceUpdate = useCallback(() => {
    setUpdateKey((updateKey) => updateKey + 1);
  }, []);

  useFirstSkipLayoutEffect(() => {
    const newState = finalStateCallback ? finalStateCallback(state) : state;
    if (!equal(newState, _state.current)) {
      _state.current = newState;
      forceUpdate();
    }
  }, [state]);

  useFirstSkipLayoutEffect(() => {
    const newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
    if (!equal(newState, _state.current)) {
      _state.current = newState;
      forceUpdate();
    }
  }, [finalStateCallback]);

  const setState = useCallback<Dispatch<SetStateAction<T>>>((newState) => {
    const finalNewState = typeof newState === 'function' ? (newState as (prev: T) => T)(_state.current) : newState;
    if (!equal(_state.current, finalNewState)) {
      _state.current = finalNewState;
      forceUpdate();
    }
  }, []);

  return [_state.current, setState];
}
