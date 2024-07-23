import { useState, useCallback , useEffect, useRef } from "react"



function App() {

  // update the lengh, number, char , copy and password in UI
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // Use ref hook
  const passwordRef = useRef(null)
  
// Generate Pass
  const PassWordGenerator = useCallback(() => {

    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) {
      str += "1234567890"
    }

    if (charAllowed) {
      str +=  "!@#$%^&*-_+=[]{}~`"
    }


    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  
  // use effect  hook to acces te password-Generator
     useEffect(() => {
      PassWordGenerator()
     }, [length, numberAllowed, charAllowed, PassWordGenerator, setPassword])
  

  //copy password to clipBoard

  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            
        />
        <button
         onClick={copyPass}   
            
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }} // previous value callback value is not smilier, compare with pre value
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )  
              }} // previous value callback value is not smilier, compare with pre value
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
      

    </>
  )
}

export default App
