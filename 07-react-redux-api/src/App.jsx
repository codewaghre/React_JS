
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTodos}  from '../src/slice/todoSlice'
import { useState } from 'react'


function App() {

  const dispatch = useDispatch()

  useState(() => {
    dispatch(fetchTodos())
  })

  
  //   dispatch(fetchTodos())

  const state = useSelector((state) => state)
  console.log(state);
  
  if (state.todo.isLoading) {
    return <h1> Laoding//......</h1>
  }

  return (
    <>
      <div>
        <h1>
          Fetch Todo
        </h1>

        {/* <button onClick={handleClick}> Fetch API</button> */}
        {
          state.todo.data && state.todo.data.map((e) => (<li key={e.id}>{ e.title}</li>) )
        }
     </div>
    </>
  )
}

export default App
