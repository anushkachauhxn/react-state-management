import React from "react";
import CounterButton from "./components/CounterButton";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h4>State Management</h4>
      <h2>useState Hook</h2>
      <CounterButton />
    </div>
  );
};

export default App;
