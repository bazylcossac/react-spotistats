import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const fetchUserData = async(token) => {
    if(localStorage.getItem('login')){
        try{
            const response = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            })
            return response
        }
        catch(error) {
            const navigate = useNavigate()            
            navigate('/login')
            
        }
    }
    else{
        return
    }
  

}

export default fetchUserData