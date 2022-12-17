import React from "react";
import { useRecoilState } from "recoil";
import counterState from "../recoil/counterState";
import incrementByState from "../recoil/incrementByState";

const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
