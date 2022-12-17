# 🍒 Context API State Management

- Allows components to share state without having to pass the data as props all the time.
- Helps avoid **props drilling**.

## Creating Context

```js
const CounterContext = createContext();
```

## Creating Custom Provider

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

## Using Context

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
