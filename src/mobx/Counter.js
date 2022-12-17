import { action, makeObservable, observable } from "mobx";

class Counter {
  numberOfClicks = 0;

  constructor() {
    makeObservable(this, {
      numberOfClicks: observable,
      increment: action,
    });
  }

  increment = (amount) => {
    this.numberOfClicks += amount;
  };
}

export default Counter;
