import React from 'react'


const ArtistPage = ({data}) => {

    /// TO DO
    /// UTORY ARTYSTOW PUSZCZAJA PREVKI


    const artistData = data[0]?.data
    const topTracks = data[1]?.data.tracks
    const topAlbums = data[2]?.data
    const relatedArtists = data[3]?.data
    console.log(topTracks)

    const spacedFollowers = (followers) => {
       const str = followers.toString()
        const reversed = str.split('').reverse().join('');
        const spacedReversed = reversed.replace(/(.{3})/g, '$1 ');
        return spacedReversed.split('').reverse().join('').trim()
    }


  return (
    <div className='m-4'>

        <div className='flex flex-row items-center justify-evenly'>
            <div className='flex flex-col text-white'>
                <h1 className='text-3xl font-bold'>{artistData.name}</h1>
                <p className=''>Followers : {spacedFollowers(artistData.followers.total)}</p>
               <span className='mt-2'>{artistData.genres.map(genre => <div key={genre} className='text-sm font-bold text-[#B0B0B0]'>{genre}</div>)}</span>
            </div>
            <img src={artistData.images[0].url} alt={artistData.name} className='rounded-full size-28'/>
        </div>

        <div className='mt-2'>
        
            <p className='text-[#C0C0C0] font-bold'>{}</p>

            <div className="artist-container mt-12">
                <div>{topTracks.map(track => <div key={track.name} className='artist' >
                    <img src={track.album.images[0].url} />
                    <p className='text-white'>{track.name}</p>
                </div>)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ArtistPage