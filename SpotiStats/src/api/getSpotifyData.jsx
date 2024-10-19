import axios from 'axios'


export async function getSpotifyData(params, limit = 10){
    console.log("fetching");
  
    const token = localStorage.getItem('token')
    // const formatedQ = q.split(' ').join('+')



    /// %2Ctrack%2Cartist
    try{
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${params}&type=artist&limit=${limit}`, {
             headers: {
                 "Authorization" : `Bearer ${token} `
             }
             
         })
         return response
    }
    catch(err) {
        if(err.status === 400){
            return {message:<p className='text-white font-bold text-sm mt-4 shadow-md'>Request faild | Please fill search bar</p>}
        }
        else{
            return {message:<p className='text-white font-bold text-sm mt-4 shadow-md'>404 error</p>}
        }
    }


}



