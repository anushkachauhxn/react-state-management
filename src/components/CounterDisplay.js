import React from "react";
import { useRecoilValue } from "recoil";
import counterState from "../recoil/counterState";

const CounterDisplay = () => {
  const numberOfClicks = useRecoilValue(counterState);

  return <h2>{numberOfClicks}</h2>;
};

export default CounterDisplay;
