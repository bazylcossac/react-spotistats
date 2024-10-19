
import axios from 'axios'


const getArtistData = async(id, endpoint = "") => {

  /// endpoints: 'top-tracks' 'albums', 'related-artists'
  const token = localStorage.getItem('token')
  
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