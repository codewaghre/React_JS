import React from 'react'
import { useState } from 'react'

function HandleMutiple() {

    //Use Multiple useState

    const [fName, setFirstName] = useState()
    const [LName, SetLastName] = useState()
    const [email, setEmail] = useState()

    //fucntion

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        SetLastName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
    }
    
    //Use Single UsweState 

    return (
        <div>
            <form>
                <label for="fname">First name:</label>  
                <br></br>
                <input   onChange={handleFirstName} type="text" id="fname" name="fname" value={fName}></input>

                <br></br>
                <br></br>

                <label for="lname">Last Name:</label>  
                <br></br>
                <input  onChange={handleLastName}  type="text" id="lname" name="lname" value={LName}></input>

                <br></br>
                <br></br>

                <label for="fname">Email:</label>  
                <br></br>
                <input  onChange={handleEmail}    type="text" id="Email" name="Email" value={email}></input>

                <br></br>
                <br></br>

                <input  onClick={handleSubmit}   type="submit" value="Submit"></input>


            </form>
        </div>
    )
}

export default HandleMutiple
