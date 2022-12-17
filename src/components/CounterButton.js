import React, { useContext, useState } from "react";
import CounterContext from "../context/CounterContext";

const CounterButton = () => {
  const { numberOfClicks, increment } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <div className="counter-button">
      <p>You have clicked the button {numberOfClicks} times.</p>
      <p>
        <label>
          Increment By:{" "}
          <input
            value={incrementBy}
            onChange={(e) => setIncrementBy(Number(e.target.value))}
            type="number"
          />
        </label>
      </p>
      <button onClick={() => increment(incrementBy)}>Click Me</button>
    </div>
  );
};

export default CounterButton;
