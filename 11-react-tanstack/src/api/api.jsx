import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

//fetch the data 
export const fetchPost = () => {
    return api.get("/posts")
}

//fetch the data
export const getPostData = async () => {
    try {
        const response = await fetchPost()
        console.log(response);
        if (response.status === 200) {
            return response.data
        } else {
            []
        }

    } catch (error) {
        console.log(error);
    }
}

//fetch the  data for pagination
export const fetchPagination = async (pageNumber) => {
    try {
        const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
        console.log(res);

        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error);
    }
};


//Delte the page
export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/posts/${id}`)
        return response.status === 200 ? response.data : []
    } catch (error) {
        console.log(error);

    }
}


//infinte Scroll

export const fetchInfiniteScroll = async ({ pageParam = 1 }) => {
    try { 
        const res = await axios.get(
            `https://api.github.com/users?per_page=10&page=${pageParam}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};