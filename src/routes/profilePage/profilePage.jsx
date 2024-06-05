import Chat from '../../components/chat/Chat'
import './profilePage.scss'

function ProfilePage() {
  return (
	<div className="profilePage">
    <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
    </div>
  </div>
  )
}

export default ProfilePage