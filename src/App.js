import React from "react";
import { RecoilRoot } from "recoil";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <div className="app">
        <h4>State Management</h4>
        <h2>Recoil</h2>
        <CounterDisplay />
        <CounterButton />
      </div>
    </RecoilRoot>
  );
};

export default App;
