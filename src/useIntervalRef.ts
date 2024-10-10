import React, { useCallback, useEffect, useRef } from 'react';
import clearIntervalRef from './clearIntervalRef';

export type UseIntervalReturnValue = [
  React.MutableRefObject<NodeJS.Timeout | undefined>,
  (callback: (ref: React.MutableRefObject<NodeJS.Timeout | undefined>) => void, ms?: number) => void,
];

export function useIntervalRef(): UseIntervalReturnValue {
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      clearIntervalRef(ref);
    };
  }, []);

  const setIntervalFunc = useCallback(
    (callback: (ref: React.MutableRefObject<NodeJS.Timeout | undefined>) => void, ms?: number) => {
      clearIntervalRef(ref);

      ref.current = setInterval(() => {
        callback(ref);
      }, ms);
    },
    []
  );

  return [ref, setIntervalFunc];
}

export default useIntervalRef;
