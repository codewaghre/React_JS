import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, showUser,  } from "../features/userDetailSlice"
import ViewCustomModel from "./ViewCustomModel"

function Read() {

    //fetch data on custon model { view model}
    const [id, setId] = useState()
    // console.log(id);

    //Pop up
    const [showPopup, setShowPopup] = useState(false)

    //check radio button
    const [radioData, setRadioData] = useState(" ");

    const dispatch = useDispatch()
    const { users, loading, searchData } = useSelector((state) => state.app)

    //laod all users form store
    useEffect(() => {
        dispatch(showUser())
    }, [])

    if (loading) {
        return (<p>Loading the Data.....</p>)
    }

    


    return (
        <div>
            {
                showPopup && <ViewCustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup}  />
            }

            <h1>Read The Data</h1>
            <div>
                <h2>All data</h2>
                <input
                    className="form-check-input"
                    name="gender"
                    type="radio"
                    checked={radioData === " "}
                    onChange={(e) => setRadioData(e.target.value) }
                />
                <label className="form-check-label">All</label>

                <input
                    className="form-check-input"
                    name="gender"
                    value="Male"
                    type="radio"
                    checked={radioData === "Male"}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label className="form-check-label">Male</label>

                <input
                    className="form-check-input"
                    name="gender"
                    value="Female"
                    type="radio"
                    checked={radioData === "Female"}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label className="form-check-label">Female</label>

                {
                    users &&

                    users.filter((data) => {
                        if (searchData.length === 0) return data
                        else {
                            return data.name.toLowerCase().includes(searchData.toLowerCase());
                        }
                    })
                        
                        .filter((data) => {
                            if (radioData === "Male") {
                            return data.gender  === radioData
                            } else if (radioData === "Female") {
                                return data.gender === radioData
                            }
                            else return data
                    })
                        
                    .map((values) => (
                    <div key={values.id}> 
                        <div className="card w-50 mx-auto my-2">
                            <div className="card-body">
                                <h5 className="card-title"> Name:- { values.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">  Email:- {values.email }</h6>
                                <p className="card-text"> Gender:- {values.gender} </p>
                                <p className="card-text"> Age:- {values.age}</p>
                                <button className="card-link" onClick={() => [setId(values.id), setShowPopup(true)]} > View </button>
                                <Link  to={`/edit/${values.id}`}  className="card-link">
                                    Edit
                                </Link>
                                <Link className="card-link" onClick={() => dispatch(deleteUser(values.id))}>
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                )) }
            </div>

        </div>
    )
}

export default Read
