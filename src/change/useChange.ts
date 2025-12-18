import React from 'react';

export function useChange(value: any, callback: () => void, skipFirst = false) {
  const [_value, _setValue] = React.useState(skipFirst ? false : '|||||skip|||||first|||||');

  if (value !== _value) {
    _setValue(value);
    callback();
  }
}
