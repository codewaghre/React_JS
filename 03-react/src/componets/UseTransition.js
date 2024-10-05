import { useState, useTransition } from "react"




function UseTransition() {


    let [name, setName] = useState('')
    let [lists, setLists] = useState([])    
    let [ispending , startTansition] = useTransition()

    const DATA_SIXE = 20000

    function HandleChnage(e) {
        const { value } = e.target

        setName(value)

        startTansition(() => {
            const dataList = []

        for (let i = 0; i < DATA_SIXE; i++){
            dataList.push(value)
        }

        setLists(dataList)

        console.log(dataList);
        })
        
    }


    return (

        <div>
            <input type="text" value={name} onChange={HandleChnage} key="input">
                
            </input>  

            {
                ispending ? <div>Laoding .....</div> : 

                    lists.map((list, value) => {

                        return <div key={value}>{list}</div>
                    })
                

            }
            
            
        </div>
    )
}


export default UseTransition