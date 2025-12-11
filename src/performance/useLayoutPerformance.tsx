import { useLayoutEffect } from 'react';

export function useLayoutPerformance(name: string) {
  const beginTime = performance.now();

  useLayoutEffect(() => {
    console.log('Layout Performance', '-', name, performance.now() - beginTime);
  });
}
