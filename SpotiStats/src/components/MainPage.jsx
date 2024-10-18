import React, {useState, useEffect, useRef} from 'react'

import {Link, Navigate, useNavigate, useOutletContext, Outlet} from 'react-router-dom'

import MainPageNav from "./MainPageNav"
import getUsersTopData from '../api/getUsersTopData'

/// TU IMPORT DO  ZAKLADEK (ALL, TRACKS ,ARTISTS, NEW )

const MainPage = () => {
  


    const [topArtists, setTopArtists] = useState(null)
    const [topTracks, setTopTracks] = useState(null)
    const [top1Artist, setTop1Artist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [term, setTerm] = useState({term:"short_term"})


    useEffect(() => {
        const fetchData = async() => {
  
            const userArtists = await getUsersTopData('artists', 10, term)
            const userTracks = await getUsersTopData('tracks', 9, term)
            setTopArtists(userArtists.data.items)
            setTop1Artist(userArtists.data.items[0])
            setTopTracks(userTracks.data.items)
            setLoading(false)

        }
        
        fetchData()
    },[term]) 
    
    const handleTermChange = (event) => {
      const {name, value} = event.target
      setTerm({[name]: value})
    }

  return (
    <>
      <MainPageNav handleTermChange={handleTermChange} term={term}/>
      <Outlet context={[topArtists, topTracks, loading, top1Artist]}/>
    </>
  )
}

export default MainPage