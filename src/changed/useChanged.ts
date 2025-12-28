import { DependencyList, useState } from 'react';

export const useChanged = (deps: DependencyList, initial = false) => {
  const [prevValues, setPrevValues] = useState(deps);
  const [isFirst, setIsFirst] = useState(true);

  if (initial) {
    if (isFirst) {
      setIsFirst(false);
      return true;
    }
  }

  let changed = false;
  if (deps !== prevValues) {
    if (deps.length !== prevValues.length || deps.some((v, i) => v !== prevValues[i])) {
      changed = true;
    }
    setPrevValues(deps);
  }

  return changed;
};
