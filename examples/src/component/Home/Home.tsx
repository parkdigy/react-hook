import React, { useEffect, useMemo, useState } from 'react';
import { useAutoUpdateState } from '@pdg/react-hook';
import useAutoUpdateRefState from '../../../../src/useAutoUpdateRefState';

const Home = () => {
  // State -----------------------------------------------------------------------------------------------------------

  const [value1, setValue1] = useState(0);
  const [value2] = useAutoUpdateState<number>(
    useMemo(() => {
      return value1 * 2;
    }, [value1])
  );
  const [value3Ref, value3] = useAutoUpdateRefState<number>(useMemo(() => value1 * 3, [value1]));

  // Effect ----------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1((oldValue) => oldValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>
        value2 : {value3Ref.current} {value3}
      </div>
    </div>
  );
};

export default Home;
