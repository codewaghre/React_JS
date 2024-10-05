import React from 'react';
import {  useReducer} from "react";
import '../App.css'



function UseReducer() {
    
    const reducer = (state, action) => {
    if (action.type === 'incr') {
        return { count: state.count + 1 }
    } else if( action.type === 'decr'){
        return {count: state.count -1}
    }
    else {
        throw new Error("Unstopeeted") 
    }

}

    let [state, dispatch] = useReducer(reducer, { count: 0 })
    
    function handleClickIncrement() {
        dispatch({type: "incr"})
    }

    function handleClickDecrement() {
        dispatch({type: "decr"})
    }
    
    return (
        <div>
            <h1> Hello  Reducer</h1>

            <h1> Count is  { state.count }</h1>

            <button className='button' onClick={handleClickIncrement}> + </button>
            
            <button className='button' onClick={handleClickDecrement} > - </button>
        </div>
    )
}

export default UseReducer


   // how to implement Reduceer
    // reducer is Function 
    // it is Pure fucntin  // 10+ 10 = 20
    //for Example
    // state is (Coffe Powder ) and action is (Water)
    // new State is Coffee
    // no side effect
    // syntax 
    //let [state, dispatch ] = UseReducer(redcuer function , initailvalue)
    
    /* Summery 

    useReducer take main pure fucntion and initial value 
    syntax of reducer is  
    //let [state, dispatch ] = UseReducer(redcuer function , initailvalue)

    reducer function is pure functin and it will take action and state
    wheere action is trigger using dispatch 

    state is update using state valyue
    
    
    */