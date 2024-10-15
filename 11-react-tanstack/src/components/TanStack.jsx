import {  useQuery } from "@tanstack/react-query";
import { getPostData  } from "../api/api";

function TanStack() {

    //tanstak Query
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['posts'], // workLike UseState 
        queryFn: getPostData, // wrok like useEffect
        // staleTime: 5000  // steal data after 5sec 
        refetchInterval: 1000,
        refetchIntervalInBackground: true
    })



    

    // Conditional rendering based on loading, error, and posts data
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong! {error}</p>;

    return (
        <div>
            <h1>Fetch Data Using TankStack Query</h1>

            <ul className="section-accordion">
                {data?.map((curElem) => {
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

export default TanStack
