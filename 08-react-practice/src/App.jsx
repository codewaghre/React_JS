import  { useState } from "react"
import "./App.css"

function App() {
  const [inputData, setInputData] = useState('')
  const [submittedNames, setSubmittedNames] = useState([]);

  function handleChange(e) {
    setInputData(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (inputData) {
      setSubmittedNames([...submittedNames,inputData ])
    }
    setInputData('')
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}> 
        <h1>Name </h1>

        <input
          placeholder="Enter Name"
          value={inputData}
          className="search-field-input"
          onChange={handleChange}
        />

        <button>Enter </button>
      </form>

      {
        submittedNames.map((name, index) => (
          <h1 key={index}>{ name}</h1>
         ))
      }
      
    </div>
  )
}

export default App
