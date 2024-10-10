import ChildA from './componets/ChildA';
import { createContext, useState } from 'react'


const UserContext  = createContext()
function App() {

  
  const [user, setUsers] = useState({ name: "Abhishek Waghre" })
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Hello Partent Components </h1>
        <ChildA />
      </UserContext.Provider>

    </> 
  );
}

export default App
export { UserContext }
