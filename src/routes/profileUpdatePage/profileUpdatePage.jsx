import './profileUpdatePage.scss'

import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest'
import { useNavigate } from 'react-router-dom'
import UploadWidget from '../../components/uploadWidget/UploadWidget'

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [avatar, setAvatar] = useState(currentUser.avatar)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const { username, email, password  } = Object.fromEntries(formData)

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar
      })
      updateUser(res.data);
      navigate('/profile')
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return (
    <div className='profileUpdatePage'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className='item'>
            <label htmlFor='username'>Username</label>
            <input
              defaultValue={currentUser.username}
              id='username'
              name='username'
              type='text'
            />
          </div>
          <div className='item'>
            <label htmlFor='email'>Email</label>
            <input
              defaultValue={currentUser.email}
              id='email'
              name='email'
              type='email'
            />
          </div>
          <div className='item'>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className='sideContainer'>
        <img
          src={avatar || '/noavatar.jpg'}
          alt='avatar'
          className='avatar'
        />
        <UploadWidget uwConfig={{
           cloudName:'lamadev',
           uploadPreset:'estate',
           multiple:false,
           maxImageFileSize:2000000,
           folder:"avatars"
          }}
          setAvatar={setAvatar}
          />
      </div>
    </div>
  )
}

export default ProfileUpdatePage
