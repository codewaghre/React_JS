import React, { useEffect, useState } from 'react';

function Fetch() {
    
    const [user, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json()
            .then(data => setUsers(data))
        )
    },[])
    return (
        <div>
            <h1>Hello</h1>
            <ul> 
                {
                    user.map(user => {
                        return <li key={user.id}>
                            {user.login}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Fetch