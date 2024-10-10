import React, { useContext} from 'react'
import ChildB from './ChildB'
import { UserContext } from '../App'; 

const ChildA = () => {
    const data = useContext(UserContext);
  return (
      <div>
          hello Child Components A, value is  {data.name}
          <ChildB />

    </div>
  )
}

export default ChildA
