import React from "react";
import { useRecoilState } from "recoil";
import counterState from "../recoil/counterState";
import incrementByState from "../recoil/incrementByState";

const CounterButton = () => {
  const [clicksData, setClicksData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  return (
    <div className="counter-button">
      <p>
        You have clicked the button{" "}
        {clicksData.reduce((sum, click) => {
          return sum + click.amount;
        }, 0)}{" "}
        times.
      </p>
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
