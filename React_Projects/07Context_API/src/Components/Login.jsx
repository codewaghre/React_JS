import React, { useContext, useState } from 'react'
import UserContext from '../Contex/UserContex'
import ContexProvider from '../Contex/ContexProvider'


function Login() {

    // handle state 
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

   // fetch the context value form userConext
    const { setUser } = useContext(UserContext)
    

   // send the value throught setUser in UserContext
    const handleSubmit = (e) => {
        e.prevetDefult
        setUser ({username, password})
    }


  return (
      <div>
          <h2>Login</h2>
          <input type='text' value={username} onChange={(e) =>setUsername(e.target.value)} placeholder='username' />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <button onClick={handleSubmit}>Submit</button>
     </div>
  )
}

export default Login
