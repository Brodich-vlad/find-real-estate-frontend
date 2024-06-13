import { useNavigate } from 'react-router-dom';
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from '../../lib/apiRequest';
import "./profilePage.scss";

function ProfilePage() {
const navigate = useNavigate()
const handleLogout = async () => {

  try{
    const res = apiRequest.post('/auth/logout')
    localStorage.removeItem('user')
    navigate('/')
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className="profilePage">
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
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user photo"
              />
            </span>
            <span>
              Username:
              <b>John Doe</b>
            </span>
            <span>
              Email:
              <b>john@gmail.com</b>
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
