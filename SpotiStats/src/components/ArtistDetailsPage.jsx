import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import getArtistData from '../api/getArtistData' /// artist id | frst parameter true/false - artist top tracks |
import ArtistPage from '../pages/ArtistPage'
/// second parameter true/false - artist top albums | third parameter true/false - related Artists
/// if you only want to get an artist just pass id, but if you want to recive either a top tracks or albums you have to pass all 3 parameters
/// example : getArtistData(id,true,false,false) gets you artist top tracks 
import { FaLongArrowAltLeft } from "react-icons/fa";
const ArtistDetailsPage = () => {

  const {id} = useParams()

  const [loading, setLoading] = useState(true)
  const [artistData, setArtistData] = useState([])
  const [err, setErr] = useState('')
  // const [artistTopTracks, setArtistTopTracks] = useState([])
  // const [artist]

  useEffect(() => {

    const fetchArtistData = async() => {
      try{
        const results = await Promise.all([
           getArtistData(id), /// ARTIST
           getArtistData(id,true), /// TOP TRACKS
           getArtistData(id,false,true), /// TOP ALBUMS
           getArtistData(id,false,false,true) /// RELATET ARTISTS
         ])
         setArtistData(results)
         setLoading(false)
      }
      catch(err){
        setErr(err.message)
      }
    }

    fetchArtistData()

  }, [])

  if(loading){
    return <div className="animate-pulse someWhite font-bold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</div>

}
if(err){
  return <div>{err}</div>
}



  return (


    <div>
        <Link to=".."><FaLongArrowAltLeft color="#B0B0B0" size={20} className='m-4'/></Link>
        <ArtistPage data={artistData} />

    </div>
   
  )
}

export default ArtistDetailsPage