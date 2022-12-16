import React, { useState } from "react";

const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
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
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click Me
      </button>
    </div>
  );
};

export default CounterButton;
