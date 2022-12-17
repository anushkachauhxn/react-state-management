# 🍉 Redux State Management

```
npm install redux react-redux
```

## 1. Actions

- Any action that can potentially change the state of our application.
- Eg: when user clicks on a button, when data finishes loading, when data starts loading.
- It contains: `type` of action and `payload`

```js
export const counterButtonClicked = {
  type: "COUNTER_BUTTON_CLICKED",
  payload: { amount: 1 },
};
```

### Action Creators

- An action creator is a function that takes in any values and returns an action according to said values.

```js
export const counterButtonClicked = (amount) => ({
  type: "COUNTER_BUTTON_CLICKED",
  payload: { amount: amount },
});
```

## 2. Reducers

- Reducers tell redux _how_ the state of our application should change whenever any given action occurs.
- Takes in: `current state` and `action`.
- Returns: `new state` after action.

```js
export const numberOfClicksReducer = (state = 0, action) => {
  const { type } = action;

  switch (type) {
    case "COUNTER_BUTTON_CLICKED":
      return state + action.payload.amount;
    default:
      return state;
  }
};
```

- It generally involves a switch function for type of action involved.
- Default case returns state as it is, i.e. no change.

## 3. Selectors

- Allow components to accurately _get_ data out of the state and occasionally to _transform_ data of the state.

```js
export const numberOfClicksSelector = (state) => state.numberOfClicks;
```

<br>

## => Using Redux

### i. Create a store

- Combine reducers using `combineReducers` and create a redux store using the `rootReducer`.

```js
const rootReducer = combineReducers({
  numberOfClicks: numberOfClicksReducer,
});

const store = createStore(rootReducer);
```

### ii. Use selectors

- Get values from state using `useSelector` hook with the corresponding selector.

```js
const numberOfClicks = useSelector(numberOfClicksSelector);
```

### iii. Dispatch actions

- Tell redux that an action should get dispatched using `useDispatch` hook with the corresponding action.

```js
const dispatch = useDispatch();

...

<button onClick={() => dispatch(counterButtonClicked)}>Click Me</button>
```
