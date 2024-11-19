import React from 'react'
import { Link } from 'react-router-dom'
import SpotifyAuth from '../api/SpotifyAuth'

const SignIn = () => {
  return (
    <>
    <div className='flex flex-row items-center'>
      <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="spotify logo" />
      <h1 className='text-white font-bold text-4xl ml-4'>SpotiStats</h1>
    </div>


    <Link
            className="p-3 bg-[#2c2c2c] rounded-2xl"
            onClick={SpotifyAuth}
            to="https://accounts.spotify.com/authorize?client_id=06d408ab38794edb91b879d117ab204f&response_type=code&redirect_uri=http://localhost:3001/callback&scope=user-read-private user-read-email user-top-read"
          >
            Sign In
       </Link>
    </>
    
  )
}

export default SignIn