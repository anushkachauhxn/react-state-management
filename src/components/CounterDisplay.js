import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const CounterDisplay = () => {
  const { numberOfClicks } = useContext(CounterContext);

  return <h2>{numberOfClicks}</h2>;
};

export default CounterDisplay;
