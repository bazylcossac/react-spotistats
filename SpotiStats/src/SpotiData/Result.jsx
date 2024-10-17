import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Result = (props) => {

    let image
    const {id, images, name, album_type}  = props.data
    const style = `w-[120px] h-[120px] ${album_type ? 'rounded-lg' : 'rounded-lg'}`
   
    
    if(images.length === 0){
      image = './src/images/noImage.jpg'
    }
    else{
      image = images[0].url
    }

  return (
    <>

    <Link to={id}>
    <div className="flex flex-col justify-center items-center">
        <img src={image} alt={`${name} image`} className={style} />
        <h2 className='text-white font-bold text-center text-sm mt-2'>{name}</h2>
    </div>
    </Link>
    <Outlet context={props.data} />

    </>
  )
}

export default Result