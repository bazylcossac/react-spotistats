import React, {useState, useEffect} from 'react'
import {NavLink, Link, useOutletContext} from 'react-router-dom'
import useFetchUserData from '../customHooks/useFetchUserData'
import { GoBell, GoHome, GoPeople } from "react-icons/go";
import SpotifyAuth from '../api/SpotifyAuth';


import useSpotifyData from '../customHooks/useSpotifyData';


const Header = ({data}) => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  const {formData, spotiData ,err, isSubmited, setFormData, setIsSubmited, setErr} = useSpotifyData()


console.log(spotiData);
  const throttle = (func, delay) => { /// WHY ITS NOT WORKING ????
    let timerThrottle = null
    return (...args) => {
      if(timerThrottle === null){
        func(...args)
        timerThrottle = setTimeout(() => {
         clearTimeout(timerThrottle)
         timerThrottle = null
        }, delay)
      }
     }
  }



  const handleSubmit = (event) => { 
    event.preventDefault()
    setIsSubmited(true)
    setErr("")
  }


  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevData => ({...prevData, [name]: value})) 
  }

  const onKeyDown = (event) => {
    if(!formData.type){
      return
    }
    if(event.key === 'Enter'){
      handleSubmit(event)
    }
  }

  useEffect(() => {
    if(data){
      setLoading(false)
      setUserData(data)
    }
  }, [data])

  if(loading){
    return <div>Loading</div>
  }
  
  



  return (
    <header className='bg-black'>
        <nav className='flex justify-between items-center text-white p-2'>

            <NavLink 
            className=""
             to="/">
            <GoHome size={20} />
             </NavLink>
            

          <div className=''>
              <div className='flex flex-row items-center'>
            
                 
                <form onSubmit={handleSubmit} className=''>
                <input type='text' 
                  required
                  name="q" 
                  className='bg-[#131313] placeholder-[#b5b5b5] font-bold rounded-lg px-4 py-2 text-sm outline-none' 
                  placeholder='Search...'
                  onChange={throttle(handleChange, 1000)}
                  onKeyDown={onKeyDown}
                  value={formData.q}
                 
                />
  
                </form>

           
              </div>
  

    </div>


            <div className='flex flex-row items-center space-x-6'>
                <Link to="/">
                  <GoBell size={18}/>
                </Link>  
              
                <div>
                  <Link to="/">
                  <GoPeople />
                  </Link> 
                </div>
                
              {userData.data?.images && userData.data?.images.length > 0 &&
                <div>
                  <img src={userData.data.images[0].url} className='rounded-full p-1 bg-[#292929] ' width={40}  />
                </div>
              }
            </div>
        </nav>
    </header> 
  )


  }
 
export default Header