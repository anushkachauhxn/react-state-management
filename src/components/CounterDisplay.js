import React from "react";
import { observer } from "mobx-react-lite";

const DisplayCount = observer(({ counter }) => {
  return <h2>{counter.numberOfClicks}</h2>;
});

export default DisplayCount;
