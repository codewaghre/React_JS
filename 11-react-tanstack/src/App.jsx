import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './App.css'
import InfiniteScroll from "./components/InfiniteScroll";
// import DeleteData from "./components/DeleteData";
// import TanStack from './components/TanStack'
// import FetchAxios from "./components/FetchAxios";
// import FetchPagination from "./components/FetchPagination";



function App() {
  const queryClient = new QueryClient()

  return ( 
  
    <>
      React TankStack Query 
      
      <QueryClientProvider client={queryClient}>
        {/* <TanStack /> */}
        {/* <FetchAxios/> */}
        {/* <FetchPagination/> */}
        {/* <DeleteData/> */}
        <InfiniteScroll/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </>
  )
}

export default App
