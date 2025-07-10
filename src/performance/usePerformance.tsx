import { useEffect } from 'react';

export function usePerformance(name: string) {
  const beginTime = performance.now();

  useEffect(() => {
    console.log('Performance', '-', name, performance.now() - beginTime);
  });
}
