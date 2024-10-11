import { useState } from 'react'
import './index.css'
function Index() {

    const [submitArray, setSubmitArray] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    

    function handleChange(e) {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    let {name, email } = formData
    function handleSubmit(event) {
        event.preventDefault()
        setSubmitArray([ ...submitArray, { name, email }])
        console.log(submitArray);
        console.log(formData);
        
        
    }

    

    return (
    <div>
          <h1>Add  Name and Email </h1>
          
          <form onSubmit={handleSubmit}> 
                <input
                    className="search-field-input"
                    type="text" name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className="search-field-input"
                    type="email" name="email"
                    placeholder="Enter Enamil"
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <button type='submit' className='search-field-input'>Enter </button>
                
                
            </form>
            
                    
                {
                    submitArray.map((data, index) => (
                        <h1 key={index}> {data.name} and { data.email}</h1>
                    ))
                }
            
    </div>
  )
}

export default Index
