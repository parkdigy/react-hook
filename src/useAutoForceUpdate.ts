import { useEffect, useState } from 'react';

export function useAutoForceUpdate(name: string, interval: number) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const tm = setInterval(() => {
      setTick((old) => {
        console.log('Auto Force Update', '-', name, old + 1);
        return old + 1;
      });
    }, interval);

    return () => {
      clearInterval(tm);
    };
  }, [interval]);
}

export default useAutoForceUpdate;
