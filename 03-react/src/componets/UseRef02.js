import { useState, useEffect, useRef } from "react";

import '../App.css'


function UseRef02() {

    const renderCount = useRef(0)
    let [state , setState] =  useState('')

    const  handle = () => {
        renderCount.current = renderCount.current + 1 
        console.log(`Clicked ${renderCount.current}`);
        
    }

    useEffect(() => {
        console.log("The Component have been rendered");
    })

    function HandleChange() {
        state = ++state 
        setState( state)
        console.log(state);
        
    }



    return (
        <div>
            <h1>Use Refff 02 example</h1>

            <button className="button" onClick={handle}>Click Me Onc </button>
            <button className="button" onClick={HandleChange}>Click Me Two </button>

            <h1>`visit Console log and Click Me One  {state} prevent the unnecessary rendering and 
                Click me 2 render each time when click`
            </h1>
        </div>
    )
}

export default UseRef02