import { selector } from "recoil";
import counterState from "./counterState";

const numberOfClicksSelector = selector({
  key: "numberOfClicksSelector",
  get: ({ get }) => {
    const clicksData = get(counterState);

    const numberOfClicks = clicksData.reduce((sum, clickData) => {
      return sum + clickData.amount;
    }, 0);
    return numberOfClicks;
  },
});

export default numberOfClicksSelector;
