import React from 'react';

export function clearIntervalRef(ref: React.RefObject<NodeJS.Timeout | undefined>): void {
  if (ref.current) {
    clearInterval(ref.current);
    ref.current = undefined;
  }
}
