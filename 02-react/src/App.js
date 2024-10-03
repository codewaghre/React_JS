import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const[ data , setData ] = useState()

  useEffect(() => {
    console.log("Im First")

    return (
      () => {
        console.log("Im Second");
      }
      
    )
  }, [data])

  return (
    <div className="App">
      <h1>
        Hello
      </h1>

      <button className='button' onClick={() => setData('Abhishek')}>Click One</button>
      <br></br>
      <hr></hr>
      <button className='button' onClick={() => setData('Waghre')}>Click two</button>
      <br></br>
      <hr></hr>
      <button className='button' onClick={() => setData('CodeWaghrw')}>Click Three</button>
      <br></br>
      <hr></hr>
      <h1>{data}</h1>
      <br></br>
      <hr></hr>
      <button className='button' >Click me</button>
      
    </div>
  );
}

export default App;
