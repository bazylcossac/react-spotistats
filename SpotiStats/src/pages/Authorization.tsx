import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'




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