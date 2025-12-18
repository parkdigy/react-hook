import React, { useEffect, useState } from 'react';
import { useAutoUpdateState, useChange, useFirstSkipChange, useIntervalRef } from '../../../../src';

const Home = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [, setUpdateInterval] = useIntervalRef();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value1, setValue1] = useState(0);
  const [value2] = useAutoUpdateState(value1 * 2);
  const [value3, setValue3] = useState(value1 * 3);
  const [value4, setValue4] = useState(0);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipChange(value1, (v) => setValue3(v * 3));

  useChange(value1, (v) => setValue4(v * 4));

  useEffect(() => {
    setUpdateInterval(() => {
      setValue1((prev) => prev + 1);
    }, 1000);
  }, [setUpdateInterval]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>value3 : {value3}</div>
      <div>value4 : {value4}</div>
    </div>
  );
};

export default Home;
