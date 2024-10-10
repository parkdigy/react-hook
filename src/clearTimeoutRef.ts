import React from 'react';

export function clearTimeoutRef(ref: React.MutableRefObject<NodeJS.Timeout | undefined>): void {
  if (ref.current) {
    clearTimeout(ref.current);
    ref.current = undefined;
  }
}

export default clearTimeoutRef;
