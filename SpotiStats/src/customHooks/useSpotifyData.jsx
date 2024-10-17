import {useState, useEffect} from 'react'
import { getSpotifyData } from '../api/getSpotifyData'

export default function useSpotifyData(){
    const [formData, setFormData] = useState({q : "", type: "artist"})
    const [spotiData, setSpotiData] = useState([])
    const [isSubmited, setIsSubmited] = useState(false)
    const [err, setErr] = useState("")


  useEffect(() => {
      async function reciveSpotifyData(params){

        const data = await getSpotifyData(params)

        if(data.message){
          setErr(data.message)
          setIsSubmited(false)
        }

        if(data.data.albums){
        setSpotiData(data.data.albums.items)
        }
        else{
        setSpotiData(data.data.artists.items)
        }

      }

      if(isSubmited){
        reciveSpotifyData(formData)
        setIsSubmited(false)
      }

  }, [isSubmited])

  return  {formData, spotiData, setFormData, setIsSubmited, err, setErr, isSubmited}
}