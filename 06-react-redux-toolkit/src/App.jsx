
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from '../src/features/Counter/counterSlice'
import './App.css'

function App() {

  // let [count, setcount] = useState(0)
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }
  

  return (
    <>
      <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count : {count} </p>
        <button onClick={handleDecrement}>- </button>
      </div>
    </>
  )
}

export default App
