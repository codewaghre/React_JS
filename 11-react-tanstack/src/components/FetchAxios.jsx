import { useEffect, useState } from "react";
import { fetchPost } from "../api/api"


function FetchAxios() {

    const [posts, setPsots] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // fetch the data 
    const getPostData = async () => {
        try {
            const response = await fetchPost()
            // console.log(response);
            if (response.status === 200) {
                setPsots(response.data)
                setIsLoading(false)
            } else {
                []
            }

        } catch (error) {
            console.log(error);
            setIsError(true)
            setIsLoading(false)
        }
    }


    useEffect(() => {
        getPostData()
    }, [])


    // Conditional rendering based on loading, error, and posts data
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;



    return (
        <div>
            <h1>Fetch Data Using React axios</h1>

            <ul className="section-accordion">
                {posts?.map((curElem) => {
                    const { id, title, body } = curElem;
                    return (
                        <li key={id}>
                            <p>{title}</p>
                            <p>{body}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default FetchAxios
