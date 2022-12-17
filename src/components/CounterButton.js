import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberOfClicksSelector } from "../redux/selectors";
import { counterButtonClicked } from "../redux/actions";

const CounterButton = () => {
  const numberOfClicks = useSelector(numberOfClicksSelector);
  const dispath = useDispatch();

  return (
    <div className="counter-button">
      <p>You have clicked the button {numberOfClicks} times.</p>
      <p>
        {/* <label>
          Increment By:{" "}
          <input
            value={incrementBy}
            onChange={(e) => setIncrementBy(Number(e.target.value))}
            type="number"
          />
        </label> */}
      </p>
      <button onClick={() => dispath(counterButtonClicked)}>Click Me</button>
    </div>
  );
};

export default CounterButton;
