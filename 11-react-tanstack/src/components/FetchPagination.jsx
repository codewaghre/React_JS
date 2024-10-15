import { fetchPagination } from "../api/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";


function FetchPagination() {
    //state
    const [pageNumber, setPageNumber] = useState(0);

    //tanstak Query
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['posts', pageNumber], // workLike UseState 
        queryFn:  () => fetchPagination(pageNumber), // wrok like useEffect
        // staleTime: 5000  // steal data after 5sec 
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,
        placeholderData: keepPreviousData,
        
    })


    // Conditional rendering based on loading, error, and posts data
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong! {error}</p>;

    return (
        <div>
            <h1>Fetch Data Using TankStack Query and  Paginatation </h1>

            <ul className="section-accordion">
                {data?.map((curElem) => {
                    const { id, title, body } = curElem;
                    return (
                        <li key={id}>
                            <h4>ID :-  {id}</h4>
                            <p>{title}  </p>
                            <p>{body}</p>
                        </li>
                    );
                })}
            </ul>

            <div className="pagination-section container">
                <button
                    disabled={pageNumber === 0 ? true : false}
                    onClick={() => setPageNumber((prev) => prev - 3)}
                >
                    Prev
                </button>
                <p>{pageNumber / 3 + 1}</p>
                <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
            </div>

        </div>
    )
}

export default FetchPagination
