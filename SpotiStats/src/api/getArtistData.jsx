import React from 'react'
import axios from 'axios'


const getArtistData = async(id, topTracks = false, topAlbums = false, relatedArtists = false) => {

  const endpoints = {
    topTracks : 'top-tracks',
    topAlbums : 'albums',
    relatedArtists : 'related-artists'
  }

  const endpoint = topTracks ? endpoints.topTracks : 
                  topAlbums ? endpoints.topAlbums : 
                  relatedArtists ? endpoints.relatedArtists : ''

  const token = sessionStorage.getItem('token')
  
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