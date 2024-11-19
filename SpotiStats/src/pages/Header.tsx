import React, {useState, useEffect} from 'react'
import {NavLink, Link,  useNavigate} from 'react-router-dom'
import { GoBell, GoHome, GoPeople } from "react-icons/go";





const Header = ({data}) => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({q : "", type: "artist"})
  
  const [isSubmited, setIsSubmited] = useState(false)
  const [err, setErr] = useState("")


  const throttle = (func, delay) => { 
    let timerThrottle = null
    return (...args) => {
      if(timerThrottle === null){
        func(...args)
        timerThrottle = setTimeout(() => {
         timerThrottle = null
        }, delay)
      }
     }
  }



  const handleSubmit = (event) => { 
    event.preventDefault()
    setIsSubmited(true)
    setErr("")
    const {name, value} = event.target
    setFormData(prevData => ({...prevData, [name]: value})) 
    navigate(`/search?artist=$${value}`) ///
    
  }


  const handleChange = (event) => {
    const {name, value} = event.target
    console.log(value);
    setFormData(prevData => ({...prevData, [name]: value})) 
    navigate(`/search?artist=$${value}`) ///
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
    <div>
    <header className='bg-black fixed top-0 w-full z-50'>
        <nav className='flex justify-between items-center text-white p-2'>

            <NavLink 
            className=""
             to="/">
            <GoHome size={22} />
             </NavLink>
            

          <div className=''>
              <div className='flex flex-row items-center'>
            
                 
                <form onSubmit={handleSubmit} className=''>
                <input type='text' 
                  required
                  name="q" 
                  className='bg-[#131313] placeholder-[#b5b5b5] font-bold rounded-lg px-4 py-4 text-sm outline-none' 
                  placeholder='Search...'
                  onChange={handleChange}
                  onKeyDown={onKeyDown}
                  value={formData.q}
                 
                />
                </form>
              </div>
    </div>


            <div className='flex flex-row items-center space-x-6'>
                <Link to="/">
                  <GoBell size={20}/>
                </Link>  
              
                <div>
                  <Link to="/">
                  <GoPeople size={20}/>
                  </Link> 
                </div>
                
              {userData.data?.images && userData.data?.images.length > 0 &&
                <div>
                  <img src={userData.data.images[0].url} className='rounded-full p-1 bg-[#292929] ' width={50}  />
                </div>
              }
            </div>
        </nav>
    </header> 

    </div>
  )


  }
 
export default Header