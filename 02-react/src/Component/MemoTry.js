
import React from "react";


function MemoTry(props) {
    
    const { Count } = props
    console.log(Count);
    
    return (
        <div>
            
            <h1>Hello count on memetry comoponent is {Count}</h1>

        </div>
    )
}
export default React.memo(MemoTry)