import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const CounterButton = observer(({ counter }) => {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <div className="counter-button">
      <p>You have clicked the button {counter.numberOfClicks} times.</p>
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
      <button onClick={() => counter.increment(incrementBy)}>Click Me</button>
    </div>
  );
});

export default CounterButton;
