import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h4>State Management</h4>
        <h2>Recoil</h2>
        <CounterDisplay />
        <CounterButton />
      </div>
    </Provider>
  );
};

export default App;
