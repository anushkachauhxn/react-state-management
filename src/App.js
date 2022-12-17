import React from "react";
import Counter from "./mobx/Counter";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import "./App.css";

const counter = new Counter();

const App = () => {
  return (
    <div className="app">
      <h4>State Management</h4>
      <h2>MobX</h2>
      <CounterDisplay counter={counter} />
      <CounterButton counter={counter} />
    </div>
  );
};

export default App;
