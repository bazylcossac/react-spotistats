
import axios from 'axios'
import { getCookieValue } from '../Tools/Tools'
const getUsersTopData = async(genre, limit, term) => {

     try{
        const token = getCookieValue('token')
        const response = await axios.get(`https://api.spotify.com/v1/me/top/${genre}?limit=${limit}&time_range=${term.term}`, {
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
        return response
     }catch(err) {
        console.log(err);
        return {
            message : "Failed to load data"
        }
    }
    

}

export default getUsersTopData