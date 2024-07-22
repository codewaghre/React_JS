import {useState} from 'react'
import './App.css'

function App() {

  //Hooks
  let [counter, setcounter] = useState(15)

  // let counter = 15 // default acounter
  
  // Add value on click 
  const addvalue = () => {
    console.log("click ", counter);
    counter = counter + 1
    if (counter > 20) {
      alert("Counter has Reached the maximum value")
      console.log("Stop");
      addvalue.stopPropogation()
    }

  setcounter(counter)
  }
   
  
  //Remove Value on click
  const removeValue = () => {
    counter = counter - 1
    
    if (counter < 0) {
      alert("Counter has Reached the maximum value")
      removeValue.stopPropogation()
    }
    setcounter(counter)
  }

  return (
    <>
      <h1>Counter Project </h1>
      <h3> Counter value : {counter} </h3>
      <button onClick={addvalue}> Add Value {counter} </button>
      <button  onClick={removeValue}>Remove Value {counter }</button>
      <p>Fotter : {counter}</p>
    </>
  )
}

export default App
