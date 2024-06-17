import './layout.scss';
import Navbar from "../../components/navbar/Navbar.jsx";
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';

export function Layout() {
  return  ( 
  <div className='layout'>
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className='content'>
      <Outlet />
    </div>
  </div>)
}

export function RequireAuth() {
  const {currentUser} = useContext(AuthContext)
  
  return  !currentUser ? ( 
    <Navigate to={"/login"}/>
    ):(
    <div className='layout'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}