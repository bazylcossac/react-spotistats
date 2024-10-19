import React, {useEffect} from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom'
import SpotifyAuth from '../api/SpotifyAuth'

const Autorization = () => {
    const navigate = useNavigate()
    const userAuthzation = localStorage.getItem('login')

  
    if(!userAuthzation || userAuthzation === null){
        navigate("/login")
        // <Navigate to="/login" replace={true} />
    }
    return <Outlet />
}

export default Autorization