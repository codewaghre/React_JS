
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { searchUser } from "../features/userDetailSlice"



function Navbar() {
    const allData = useSelector((state) => state.app.users)
    const dispatch = useDispatch()

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Redux Crud</a>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" className="nav-link active">
                                Create Post
                            </Link>

                            <Link className="nav-link active" to="/read" >
                                All Post  ({allData.length})
                            </Link>
                        </ul>
                        <input
                            className="form-control me-2 w-50"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchData}
                            onChange={(e) => setSearchData(e.target.value)}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
