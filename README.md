# React Immer Hooks

> Easy immutability in [React Hooks](https://reactjs.org/docs/hooks-intro.html) with [Immer](https://github.com/mweststrate/immer).

**Note:** _React Hooks are currently a [RFC proposal](https://github.com/reactjs/rfcs/pull/68) which may be subject to change. You'll need at least `react@16.7.0-alpha.0` to use this feature._

## Installation

`yarn add react-immer-hooks`

## Usage

##### useImmerState(initialState)

```jsx
import { useImmerState } from 'react-immer-hooks'

const initialState = {
  clicks: 0,
  doubleClicks: 0
}

const ClickCounters = () => {
  const [ state, setState ] = useImmerState(initialState)

  const onClick = () => setState(draft => { draft.clicks++ })
  const onDoubleClick = () => setState(draft => { draft.doubleClicks++ })

  return (
    <>
      <button onClick={onClick} onDoubleClick={onDoubleClick}>
        Clics: {state.clicks}, Double clicks: {state.doubleClicks}
      </button>
    </>
  )
}
```

##### useImmerReducer(reducer, initialState)

```jsx
import { useImmerReducer } from 'react-immer-hooks'

const initialState = {
  count: 0
}

const reducer = (draft, action) => {
  if (action.type === 'INCREMENT') draft.count++
  if (action.type === 'DECREMENT') draft.count--
  if (action.type === 'ADD') draft.count += action.payload
}

const Counter = () => {
  const [ state, dispatch ] = useImmerReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 5})}>
        Add 5
      </button>
    </>
  )
}
```

## License

MIT License
