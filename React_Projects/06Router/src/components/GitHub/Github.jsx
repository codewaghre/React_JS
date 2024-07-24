import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

//     // first way to fetch the data 
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setData(data)
//         })
// },[])

  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          <h1>Github followers: {data.followers}</h1>
          <div className='text-center'>
              <img src={data.avatar_url} alt="Git picture" width={300} />
          </div>
    
    </div>
  )
}

export default Github

// seocnd way to fetch the data 
export const githubInfolaoder = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    
    return response.json()
}
