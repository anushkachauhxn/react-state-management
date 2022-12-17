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
