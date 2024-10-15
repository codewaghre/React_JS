import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchInfiniteScroll } from "../api/api"
import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";




function InfiniteScroll() {

    //fetch the data
    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["Scollable Data"],
        queryFn: fetchInfiniteScroll,
        getNextPageParam: (lastPage, allPages) => {
            console.log("lastPage", lastPage, allPages);
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        },
    })

    // console.log(data);

    const handleScroll = () => {
        const bottom = window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 1;

        if (bottom && hasNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll())

        return window.removeEventListener('scroll', handleScroll())
    }, [fetchNextPage, hasNextPage])



    // Conditional rendering based on loading, error, and posts data
    // if (isLoading) return <p>Loading...</p>;
    // if (isError) return <p>Something went wrong!</p>;

    return (
        <>
            <h1> Inifinte Scroll Using TankStack Query </h1>

            <div>
                <h1>Infinite Scroll with React Query v5</h1>

                {data?.pages?.map((page, index) => (
                    <ul key={index}>
                        {page.map((user) => (
                            <li
                                key={user.id}
                                style={{ padding: "10px", border: "1px solid #ccc" }}
                            >
                                <p>{user.login}</p>
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    width={50}
                                    height={50}
                                />
                            </li>
                        ))}
                    </ul>
                ))}

            </div>
        </>
    )
}

export default InfiniteScroll
