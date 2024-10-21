import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {getCookieValue} from '../Tools/Tools'

const fetchUserData = async(token) => { /// returns currently logged user data
    const navigate = useNavigate() 
    console.log(token);
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
            
            navigate('/login')   
        }
    }
    else{
        return
    }
  

}

export default fetchUserData