# 🍇 MobX State Management

MobX takes a more object-oriented approach as compared to redux.

```
npm install mobx mobx-react-lite
```

## Creating MobX State

- Use a class to store the state.
- The class can contain values and actions.

```js
class Counter {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
    });
  }

  increment = (amount) => {
    this.value += amount;
  };
}
```

## Using MobX State

- Pass an instance of that class to components.

```js
const counter = new Counter();
```

```js
<DisplayCount counter={counter} />
<CounterButton counter={counter} />
```

### Important: Do not forget

- use `makeObservable` or `makeAutoObservable` in the class constructor

```js
constructor() {
  makeObservable(this, {
    value: observable,
    increment: action,
  });
}
```

or

```js
constructor() {
  makeAutoObservable(this)
}
```

- wrap your components in `observer`

```js
const CounterButton = observer(({ counter }) => {
  ...
});
```

#### _Note:_

Since we are passing the class instance to components through **props**, it can again result in props drilling.

We can use **Context API with MobX** to make the class instance available to all components.
