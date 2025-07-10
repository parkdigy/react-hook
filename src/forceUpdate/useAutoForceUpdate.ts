import { useEffect, useState } from 'react';

export function useAutoForceUpdate(interval: number) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const tm = setInterval(() => {
      setTick((old) => {
        return old + 1;
      });
    }, interval);

    return () => {
      clearInterval(tm);
    };
  }, [interval]);
}
