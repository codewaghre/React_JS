import { useSelector } from 'react-redux'
import '../components/ViewCustomModel.css'
function ViewCustomModel(Props) {

    const {id, setShowPopup} = Props
    
    const allUsers = useSelector(state => state.app.users)

    const singleUser = allUsers.filter((users) => users.id == id)
    // console.log(singleUser);
    
    return (
      
    <div>
          <h1> View Data</h1>
          <div className="modalBackground">
              <div className="modalContainer">
                    <button onClick={() => setShowPopup(false)}>Close</button>
                    <p> Name:- {singleUser[0].name}</p>
                    <p> Email:- {singleUser[0].email}</p>
                    <p> Age:- {singleUser[0].age}</p>
                    <p> Gender:- {singleUser[0].gender}</p>
              </div>
          </div>
    </div>
  )
}

export default ViewCustomModel
