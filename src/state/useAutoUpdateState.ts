import { SetStateAction, useState } from 'react';
import { Func } from '@pdg/types';
import { useAutoUpdateRef } from '../ref';

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
  const [prevProps, setPrevProps] = useState({ state, callback });
  const [_value, _setValue] = useState(() => (callback ? callback(state) : state));

  let finalValue = _value;
  if (state !== prevProps.state || callback !== prevProps.callback) {
    finalValue = callback ? callback(state) : state;
    setPrevProps({ state, callback });
    _setValue(finalValue);
  }

  // setValue 함수 재생성을 막기 위해 finalValueRef, callbackRef 사용
  const finalValueRef = useAutoUpdateRef(finalValue);
  const callbackRef = useAutoUpdateRef(callback);

  const setValue = (newValue: any, skipCallback?: boolean) => {
    const resolvedValue = typeof newValue === 'function' ? newValue(finalValueRef.current) : newValue;
    const nextValue = !skipCallback && callbackRef.current ? callbackRef.current(resolvedValue) : resolvedValue;

    // setValue 연속 호출 시 최신 값을 참조할 수 있도록 처리
    finalValueRef.current = nextValue;

    _setValue(nextValue);
    return nextValue;
  };

  return [finalValue, setValue] as const;
}
