import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import fetchUserData from "../api/fetchUserData"

const useFetchUserData = () => {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      if(!sessionStorage.getItem('login')){
       navigate("/login")
      }
      
      const getUserData = async() => {
        const user = await fetchUserData(sessionStorage.getItem('token'))
        setUserData(user)
      }
    
      getUserData()
    },[])
    return userData
  
}

export default useFetchUserData