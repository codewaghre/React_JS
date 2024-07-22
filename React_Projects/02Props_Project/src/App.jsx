
import './App.css'

import Card from './components/Card'

function App() {

  let myObj = {
    username: "Codewaghre",
    email: "Codewaghre@gmail.com"
  }

  let myary = ["Abhishek","awaghre99@gmail.com"]
  

  return (
    <>
      {/* <h1 className='bg-green-200 p-4 rounded-xl text-black text-[50px] '>CodeWaghre</h1> */}
      <Card username="Anushka Kulkarni" obj={myObj} ary={myary} btnText= "Click On Me"  />
      <Card  username="Abhishek Waghre"  />
    </>
  )
}

export default App
