
import axios from 'axios'
import { getCookieValue } from '../Tools/Tools'


const getArtistData = async(id, endpoint = "") => { /// returns endpoint data of artist. 

  /// endpoints: 'top-tracks' 'albums', 'related-artists'
  const token = getCookieValue('token')
  
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