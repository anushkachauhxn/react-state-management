import React from "react";
import CounterProvider from "./context/CounterProvider";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import "./App.css";

const App = () => {
  return (
    <CounterProvider>
      <div className="app">
        <h4>State Management</h4>
        <h2>Context</h2>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CounterProvider>
  );
};

export default App;
