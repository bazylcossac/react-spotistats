import axios from 'axios'

const getUserPlaylists = async() => {
  const token = localStorage.getItem('token')

  try{
    const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=10', {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    return response
  }catch(err){
    return {message: err.message}
  }
}

export default getUserPlaylists
