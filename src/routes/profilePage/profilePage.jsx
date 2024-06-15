import { useNavigate } from 'react-router-dom';
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from '../../lib/apiRequest';
import "./profilePage.scss";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

function ProfilePage() {
  
  const { updateUser, currentUser } = useContext(AuthContext)
 
  const navigate = useNavigate()

  useEffect(()=>{
    if(!currentUser){
      navigate ("/login")
    }
  },[currentUser,navigate])

  const handleLogout = async () => {

    try{
      await apiRequest.post('/auth/logout')
      updateUser(null)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

    return (
    currentUser &&  <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h2>User Information</h2>
              <button>Updete Profile</button>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img
                  src={currentUser.avatar || "/noavatar.jpeg"}
                  alt="user photo"
                />
              </span>
              <span>
                Username:
                <b>{currentUser.username}</b>
              </span>
              <span>
                Email:
                <b>{currentUser.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h2>My List</h2>
              <button>Create New Post</button>
            </div>
            <List />
            <div className="title">
              <h2>Saved List</h2>
            </div>
            <List />
          </div>
        </div>

        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
    );
}
export default ProfilePage;
