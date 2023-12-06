import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from './redux/counter.redux'

import './App.css'

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <main>
      <h1>Counter</h1>

      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </main>
  )
}

export default App
