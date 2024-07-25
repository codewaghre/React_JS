import React, { useContext } from 'react'
import UserContext from '../Contex/UserContex'


function Profile() {

    //send  the value through user
     const { user } = useContext(UserContext)
    
    //Condition Return
    if (!user) return <div>Plaase Login</div>
    
    return <div>Welcome  {user.username}</div>
}

export default Profile
