
import datas from '../json/listData.json'
import { useState } from "react";


function List() {

    const [nData, setdata] = useState(datas)

    function clearData() {
        setdata([])
    }

    const RemoveName = (nameId) => {
        setdata(nData.filter(item => item.id !== nameId))
    }


    return (
        < div >
            <ul>  {

                nData.map((data) => {
                    return (
                        <li key={data.id}>
                            {data.name}
                            <button onClick={() => RemoveName(data.id)}>Remove Name</button>
                        </li>)
                })
            }


            </ul>

            <button onClick={clearData}>Clear </button>
        </div >
    )
}

export default List