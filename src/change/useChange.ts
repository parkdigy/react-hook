import React from 'react';

export function useChange<T>(value: T, callback: (value: T) => void) {
  // 최초 callback 호출을 위해 다른 값 설정
  const [_value, _setValue] = React.useState<T | null | undefined>(value === undefined ? null : undefined);

  if (value !== _value) {
    _setValue(value);
    callback(value);
  }
}
