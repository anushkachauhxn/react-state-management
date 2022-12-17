import React from "react";
import { useRecoilValue } from "recoil";
import counterState from "../recoil/counterState";

const CounterDisplay = () => {
  const clicksData = useRecoilValue(counterState);

  return <h2>{clicksData.length}</h2>;
};

export default CounterDisplay;
