import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'

export default function HomePage () {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream</h1>
          <p>
            Welcome to Real Estate, your ultimate destination for finding your
            dream home. With over 16 years of experience, our team is dedicated
            to providing you with the best real estate options to suit your
            needs. Whether you&apos;re looking to buy, sell, or rent, we are
            here to help you every step of the way. Our platform features a wide
            range of properties, from cozy apartments to luxurious homes, all
            ready for you to explore. Discover the perfect property today and
            make your real estate dreams come true with us!
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}
