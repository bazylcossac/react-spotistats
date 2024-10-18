import React, { useEffect, useState, useRef } from "react"
import {Link, useOutletContext} from 'react-router-dom'
import getUsersTopArtists from "../api/getUsersTopData"
import AudioPlayer from '../pages/AudioPlayer'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const AllPage = () => {
  const [topArtists, topTracks, loading, top1Artist] = useOutletContext()
  // const top1Artist = topArtists[0]
  console.log(top1Artist)


    if(loading){
        return <div className="animate-pulse someWhite font-bold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</div>
    }


    const artistElements = topArtists?.map(artist => {
        return (
            <div key={artist.id} className="artist">
            <Link to={artist.id}>
                <img src={artist.images[0].url} alt={artist.name} className="rounded-full"/>
            </Link>
            </div>
        );
      });



    const tracksElement = topTracks?.map((track, index) => {
        
        return (
            <div key={track.id} className="track px-4 py-2 my-2 mx-2 bg-[#252525] rounded-md">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <p className="text-white font-bold">{index + 1}</p>
                        <Link to="/">
                            <img src={track.album.images[0].url} alt={track.name} className="rounded-lg shadow-md ml-4" />
                        </Link>
                       <Link to={track.album.artists[0].id}> <div className="ml-4 w-4 h-full break-words">
                            <p className="someWhite font-bold text-md">{track.name}</p>
                            <p className="someWhite text-sm">{track.artists.map(artist => `${artist.name} `)}</p>
                        </div></Link>
                    </div>
                   <AudioPlayer source={track.preview_url}/>
                </div>
            </div>
        )
    })


      return (
        <div className="flex flex-col">

          <div className="flex flex-row justify-between items-center px-4 mt-4 ">
            <p className="someWhite font-bold text-lg">Top artists</p>
            <p className="someGray text-sm font-bold">See more</p>
          </div>
        
          
          <div className="artist-container m-4">
            {artistElements}
          </div>


          <div className="flex flex-row justify-between items-center px-4 mt-4 ">
                <p className="someWhite font-bold text-lg">Top tracks</p>
                <p className="someGray text-sm font-bold">See more</p>
            </div>

          <div className="tracks-container">
            {tracksElement}
          </div>  
        </div>
      );
}

export default AllPage