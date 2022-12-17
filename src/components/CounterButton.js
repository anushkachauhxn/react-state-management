import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import counterState from "../recoil/counterState";
import incrementByState from "../recoil/incrementByState";
import numberOfClicksSelector from "../recoil/numberOfClicksSelector";

const CounterButton = () => {
  const [clicksData, setClicksData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);

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
      <button
        onClick={() =>
          setClicksData([
            ...clicksData,
            { timestamp: Date.now(), amount: incrementBy },
          ])
        }
      >
        Click Me
      </button>
    </div>
  );
};

export default CounterButton;
