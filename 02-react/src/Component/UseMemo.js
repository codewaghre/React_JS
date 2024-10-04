import { useCallback,  useState } from "react"
import './style.css'

/*eslint no-unused-vars: "error"*/
/* exported global_var */

function UseMemo() {

    let [count, setCount] = useState(0)
    let [input , setInput ] = useState('')
    
    function handleCount() {
        count = count + 1
        setCount(count)
    }

    function handleInput(e) {
        setInput(e.target.value)
    }

    //Use Memo result the value
    // const result = useMemo(function slowME() {
    //     let sum  = 0
    //     for (let i = 0; i <= 100000000; i++){
    //         sum += i
    //     }

    //     console.log("hello im slow function");
    //     return sum
        
    // }, [])
    

    //let diff between useMemo and useCallBack

    const result = useCallback(function slowME() {
        let sum  = 0
        for (let i = 0; i <= 100000000; i++){
            sum += i
        }

        console.log("hello im slow function");
        return sum
        
    }, [])
    

    //Diff is useCallback return the function and useMemo return the value

    

    // const result = slowME()

    return (
        <div>
            <h1>First</h1>
            <h1>{count}</h1>
            <button className="button" onClick={handleCount}> +</button>
            <br></br>
            <input type="text" value={input} onChange={handleInput}></input>

            <h1> {result()
            } </h1>
        </div>
    )
}

export default UseMemo