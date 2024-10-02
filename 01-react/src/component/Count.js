import React from "react";
import { useState } from "react";

function Count() {

    let [count, setCount] = useState(5)
    
    function handleAdd() {
        count = count +1 
        setCount(count)
    }

    function handleSub() {
        count = count - 1
        setCount(count)
    }
    return (
        < div >
            <h1>
                {count}
            </h1>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleSub}> - </button>
        </div >
    )
}

export default Count