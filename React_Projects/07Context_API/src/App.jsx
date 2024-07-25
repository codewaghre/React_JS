import { useState } from 'react'
import './App.css'
import ContexProvider from './Contex/ContexProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContexProvider>
        <h1>Context API</h1>
        <Login />
        <Profile/>
        </ContexProvider>
    </>
  )
}

export default App
