import { useEffect, useState } from "react"



function Multiple() {

    const [users, setUsers] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
                setisLoading(false)
                
            }
            catch (error) {
                setError(error)
                setisLoading(false)
            }
        }

        fetchUsers()

        
    },[])

    if (isloading) {
            return <p>  Loading.....</p>
        }

        if (error) {
            return <p>Error .....</p>
        }


    return (
        <div>
            <h1>
                Github Users Name
            </h1>
            <ul>
                {
                    users.map(users => {
                        return <li key={users.id}>
                            {users.login}
                        </li>
                    })
                }
           </ul>
        </div>
    )
}

export default Multiple