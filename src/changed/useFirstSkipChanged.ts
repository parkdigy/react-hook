import { DependencyList, useState } from 'react';

export const useFirstSkipChanged = (callback: () => void, deps: DependencyList) => {
  const [prevDeps, setPrevDeps] = useState(deps);
  const [isFirst, setIsFirst] = useState(true);

  if (isFirst) {
    setIsFirst(false);
    return true;
  }

  let changed = false;

  if (deps !== prevDeps) {
    if (deps.length !== prevDeps.length || deps.some((v, i) => v !== prevDeps[i])) {
      changed = true;
    }
    setPrevDeps(deps);
  }

  if (changed) {
    callback();
  }
};
