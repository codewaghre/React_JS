import React, { useEffect, useLayoutEffect } from 'react';


function UseLayout() {

    useEffect(() => {
        console.log("Hello IM Use Effect First Number");

        
    })

    useEffect(() => {
        console.log("Hello IM  Use Effect SeCond  Number");
        
        
    })
    useEffect(() => {
        console.log("Hello IM  Use Effect Third Number");
        
        
    })

    useLayoutEffect(() => {
        console.log("Hello Im Use LayoutEffect First Number");
        
    })
    useLayoutEffect(() => {
        console.log("Hello Im Use LayoutEffect Second Number");
        
    })
    useLayoutEffect(() => {
        console.log("Hello Im Use LayoutEffect Third  Number");
        
    })
    return (
        <div>
            <h1>Use Effect </h1>
            <p>Use Effect is asynchronous, Data and rendring Flow is :- <br></br>
            `1. Component ----- 2.Component render due to state change  -----3. Component render------4. render component is printed on screen -------5.The useEffect Runs-----  `
            </p>
            <br></br>
            <h1>Use UseLayout</h1>
            <p> Use LayoutEffect is synchronous Data and rendring Flow is :- <br>
            </br>
            
            `1. Component ----- 2.Component render due to state change  -----3. Component render------4.  Then UseLayoutEffect Run  -------5. the Component Printed On screen-------  `</p>
        </div>
    )
}

export default  UseLayout