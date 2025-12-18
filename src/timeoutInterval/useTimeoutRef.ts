import React, { useEffect, useRef } from 'react';
import { clearTimeoutRef } from './clearTimeoutRef';

export type UseTimeoutReturnValue = [
  React.RefObject<NodeJS.Timeout | undefined>,
  (callback: (args: void) => void, ms?: number) => void,
];

export function useTimeoutRef(): UseTimeoutReturnValue {
  const ref = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    return () => {
      clearTimeoutRef(ref);
    };
  }, []);

  const setTimeoutFunc = (callback: (args: void) => void, ms?: number) => {
    clearTimeoutRef(ref);

    ref.current = setTimeout(() => {
      ref.current = undefined;
      callback();
    }, ms);
  };

  return [ref, setTimeoutFunc];
}
