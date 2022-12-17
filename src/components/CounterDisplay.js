import React from "react";
import { useRecoilValue } from "recoil";
import numberOfClicksSelector from "../recoil/numberOfClicksSelector";

const CounterDisplay = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);

  return <h2>{numberOfClicks}</h2>;
};

export default CounterDisplay;
