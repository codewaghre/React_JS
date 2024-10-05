
import {  useState, useEffect, useRef} from "react";
import '../App.css'


function UseRef() {

    const [userInput, setUserInput] = useState('')
    // const [ render , setRender] = useState('')
    
    
    function handleChange(e) {
        setUserInput(e.target.value)
    }

    // useEffect(() => {
    //     setRender(render +1 )
    // })

    let render = useRef(0)
    useEffect(() => {
        render.current = render.current + 1
    })


    return (
        <div>
            <h1> Use Reff</h1>
            <input type='text' value={userInput} onChange={handleChange}></input>
            <h1>The Component render time { render.current }</h1>
        </div>
    )
}

export default UseRef


/**   Use Reff

syntax is 
const refercane = useReff(initial value )

suppose .

const referacne = useReff(1)
then referacne  object where single proerty is  cureent : 1
called mutable object referance 

*/
