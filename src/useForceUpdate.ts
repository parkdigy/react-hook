import { useCallback, useState } from 'react';

export default function useForceUpdate() {
  const [, setValue] = useState(0);

  return useCallback(() => {
    setValue((old) => old + 1);
  }, []);
}
