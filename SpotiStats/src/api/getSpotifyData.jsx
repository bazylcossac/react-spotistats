import axios from 'axios'


export async function getSpotifyData(params){
    console.log("fetching");
    const {q, type} = params
    const token = sessionStorage.getItem('token')
    const formatedQ = q.split(' ').join('+')
    console.log(formatedQ);

   const response = await axios.get(`https://api.spotify.com/v1/search?q=${formatedQ}&type=album%2Ctrack%2Cartist&limit=10`, {
        headers: {
            "Authorization" : `Bearer ${token} `
        }
        
    })
    .catch(err => {
        if(err.status === 400){
            return {message:<p className='text-white font-bold text-sm mt-4 shadow-md'>Request faild | Please fill search bar</p>}
        }
        else{
            return {message:<p className='text-white font-bold text-sm mt-4 shadow-md'>404 error</p>}
        }
    })

    return response

}

