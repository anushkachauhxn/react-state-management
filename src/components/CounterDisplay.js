import React from "react";
import { useRecoilValue } from "recoil";
import counterState from "../recoil/counterState";

const CounterDisplay = () => {
  const clicksData = useRecoilValue(counterState);

  return (
    <h2>
      {clicksData.reduce((sum, click) => {
        return sum + click.amount;
      }, 0)}
    </h2>
  );
};

export default CounterDisplay;
