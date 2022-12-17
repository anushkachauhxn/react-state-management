import { createStore, combineReducers } from "redux";
import { numberOfClicksReducer } from "./reducers";

const rootReducer = combineReducers({
  numberOfClicks: numberOfClicksReducer,
});

const store = createStore(rootReducer);

export default store;
