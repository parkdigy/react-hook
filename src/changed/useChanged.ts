import { type DependencyList, useState } from 'react';

export const useChanged = (callback: () => void, deps: DependencyList) => {
  const [prevValues, setPrevValues] = useState<DependencyList>();

  let changed = false;

  if (prevValues === undefined) {
    changed = true;
    setPrevValues(deps);
  } else if (deps !== prevValues) {
    if (deps.length !== prevValues.length || deps.some((v, i) => v !== prevValues[i])) {
      changed = true;
    }
    setPrevValues(deps);
  }

  if (changed) {
    callback();
  }
};
