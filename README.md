# 🪐 React: State Management

## 1. useState Hook

```js
import { useState } from "react";
```

```js
const [value, setValue] = useState(0); // default value

handleChange = () => {
  setValue(value + 1); // takes a function that returns new value
};
```

## 2. Context API

- Allows components to share state without having to pass the data as props all the time.
- Helps avoid **props drilling**.

### Creating Context

```js
const CounterContext = createContext();
```

### Creating Custom Provider

```js
const CounterProvider = ({ children }) => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = (amount) => {
    setNumberOfClicks(numberOfClicks + amount);
  };

  return (
    <CounterContext.Provider value={{ numberOfClicks, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
```

### Using Context

- Wrap the necessary components in the provider.

```js
<CounterProvider>
  <div className="app">...</div>
</CounterProvider>
```

- Then, access the data in any of those components using useContext hook.

```js
const { numberOfClicks, increment } = useContext(CounterContext);
```

## 3. Recoil

Recoil has two main concepts: **atoms** and **selectors**.

- Atoms are individual values that we want to store in the Recoil state.
- Selectors take the fundamental values expressed as atoms and transform them in some way or combine them into another value.

_Note:_ All the components within recoil will share this state. It is useful in many scenarios but could be problematic in others.

### Creating Recoil State

- **Atoms** are functions that we can use to create new pieces of the Recoil state.

```js
const counterState = atom({
  key: "counterState",
  default: 0,
});
```

### Using Recoil State

Wrap the components in `<RecoilRoot>` and then access the state in any of those components using:

- `useRecoilValue` hook: to access a particular state value.

```js
const numberOfClicks = useRecoilValue(counterState);
```

- `useRecoilState` hook: to access and modify a particular state value.

```js
const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
```

### Using Selectors

**Selectors** allow us to define certain logic in one spot. Instead of defining the logic in multiple components, we can use a selector instead.

```js
const numberOfClicksSelector = selector({
  key: "numberOfClicksSelector",
  get: ({ get }) => {
    // get currrent data from a recoil state
    const clicksData = get(counterState);

    // return a modified value
    const numberOfClicks = clicksData.reduce((sum, clickData) => {
      return sum + clickData.amount;
    }, 0);
    return numberOfClicks;
  },
});
```

Access the modified value in any of those components using `useRecoilValue` hook.
