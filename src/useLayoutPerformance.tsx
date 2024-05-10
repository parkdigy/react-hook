import { useLayoutEffect } from 'react';

export default function useLayoutPerformance(name: string) {
  const beginTime = performance.now();

  useLayoutEffect(() => {
    console.log('Layout Performance', '-', name, performance.now() - beginTime);
  });
}
