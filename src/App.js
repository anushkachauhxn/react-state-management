import React from "react";
import CounterProvider from "./context/CounterProvider";
import CounterButton from "./components/CounterButton";
import "./App.css";

const App = () => {
  return (
    <CounterProvider>
      <div className="app">
        <h4>State Management</h4>
        <h2>useState Hook</h2>
        <CounterButton />
      </div>
    </CounterProvider>
  );
};

export default App;
