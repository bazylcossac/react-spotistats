import React from 'react'
import axios from 'axios'


const getArtistData = async(id, endpoint = "") => {


  const token = sessionStorage.getItem('token')
  
  try{
    const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/${endpoint}`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    return response
  }
  catch(err){
    return {message: `${err.status} | ${err.message}`}
  }
}

export default getArtistData