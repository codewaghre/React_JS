import { useEffect, useState } from "react"
import './style.css'

import MemoTry from "./MemoTry"

function Memo() {

    let [count, setCount] = useState(0)
    let [input , setInput ] = useState('')
    
    function handleCount() {
        count = count + 1
        setCount(count)
    }

    function handleInput(e) {
        setInput(e.target.value)
    }
    return (
        <div>
            <h1>First</h1>
            <h1>{count}</h1>
            <button className="button" onClick={handleCount}> +</button>
            <br></br>
            <input type="text" value={input} onChange={handleInput}></input>

            <MemoTry Count={count} />
        </div>
    )
}

export default Memo