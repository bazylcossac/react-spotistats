import React, {useEffect, useState, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import getArtistData from '../api/getArtistData'
import ArtistPage from '../pages/ArtistPage'
const ArtistDetailsPage = () => {

  const {id} = useParams()

  const [loading, setLoading] = useState(true)
  const [artistData, setArtistData] = useState([])
  const [err, setErr] = useState('')
  const [reload, setReload ] = useState(false)
  const [prevId, setPrevId] = useState(null)

  // const [artistTopTracks, setArtistTopTracks] = useState([])
  // const [artist]

  useEffect(() => {
  
    const fetchArtistData = async() => {
      try{
        const results = await Promise.all([
           getArtistData(id), /// ARTIST
           getArtistData(id,"top-tracks"), /// TOP TRACKS
           getArtistData(id,"albums"), /// TOP ALBUMS
           getArtistData(id,"related-artists") /// RELATET ARTISTS
         ])
         setArtistData(results)
         setLoading(false)
      }
      catch(err){
        setErr(err.message)
      }
    }

    fetchArtistData()

    return () => {
      setPrevId(id)
    }

  }, [reload])

  const handleReload = () => {
    setReload(prev => !prev)
  }

  if(loading){
    return <div className="animate-pulse someWhite font-bold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</div>

}
if(err){
  return <div>{err}</div>
}



  return (


    <div>
        <ArtistPage data={artistData} handleReload={handleReload} prevId={prevId}  />
    </div>
   
  )
}

export default ArtistDetailsPage