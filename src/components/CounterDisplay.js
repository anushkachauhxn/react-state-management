import React from "react";
import { useSelector } from "react-redux";
import { numberOfClicksSelector } from "../redux/selectors";

const CounterDisplay = () => {
  const numberOfClicks = useSelector(numberOfClicksSelector);

  return <h2>{numberOfClicks}</h2>;
};

export default CounterDisplay;
