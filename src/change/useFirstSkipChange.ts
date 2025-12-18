import React from 'react';

export function useFirstSkipChange<T>(value: T, callback: (value: T) => void) {
  const [_value, _setValue] = React.useState(value);

  if (value !== _value) {
    _setValue(value);
    callback(value);
  }
}
