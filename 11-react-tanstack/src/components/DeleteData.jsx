import { keepPreviousData, useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { useState } from "react";
import { fetchPagination , deletePost} from "../api/api";


function DeleteData() {
    //state
    const [pageNumber, setPageNumber] = useState(0);
     const queryClient = useQueryClient()

    //tanstak Query
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['posts', pageNumber], // workLike UseState 
        queryFn: () => fetchPagination(pageNumber), // wrok like useEffect
        // staleTime: 5000  // steal data after 5sec 
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,
        placeholderData: keepPreviousData,

    })

    //! mutation function to delete the post
    const deleteMutation = useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: (data , id) => {
            // console.log(data  , id);
            queryClient.setQueryData(['posts', pageNumber], (currElemetn) => {
                return  currElemetn.filter((post) => post.id !== id)
            })
        }

    })


    // Conditional rendering based on loading, error, and posts data
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong! {error}</p>;

    return (
        <div>
            <h1>Fetch Data Using TankStack Query  and  Delete Data </h1>

            <ul className="section-accordion">
                {data?.map((curElem) => {
                    const { id, title, body } = curElem;
                    return (
                        <li key={id}>
                            <h4>ID :-  {id}</h4>
                            <p>{title}  </p>
                            <p>{body}</p>
                            <hr></hr>
                            <button  onClick={() => deleteMutation.mutate(id)}>Delete</button>
                        </li>

                        // 
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

export default DeleteData
