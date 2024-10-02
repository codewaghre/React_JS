import React from "react";
import { useState } from "react";

// handle Muitple sate using one useSate()
function MultipleStateAtOne() {


    //handle Data

    const [formData, setFormData] = useState({
        name: '',
        lname: '',
        email: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
    }


    function handleEvent(e) {
        // console.log(e.target.name);
        const { name, value } = e.target
        
        setFormData({
            ...formData,[name]: value
        })
        
    }
    
    return (
        <div>
            <form>
                <label for="fname">First name:</label>  
                <br></br>
                <input   onChange={handleEvent} type="text" id="fname" name="name" value={formData.name}></input>

                <br></br>
                <br></br>

                <label for="lname">Last Name:</label>  
                <br></br>
                <input  onChange={handleEvent}  type="text" id="lname" name="lname" value={formData.lname}></input>

                <br></br>
                <br></br>

                <label for="fname">Email:</label>  
                <br></br>
                <input  onChange={handleEvent}    type="text" id="Email" name="email" value={formData.email}></input>

                <br></br>
                <br></br>

                <input  onClick={handleSubmit}   type="submit" value="Submit"></input>


            </form>
        </div>
    )
}

export default MultipleStateAtOne