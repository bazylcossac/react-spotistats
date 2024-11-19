import React from 'react'
import { Outlet} from 'react-router-dom'



import Header from './Header'
import useFetchUserData from '../customHooks/useFetchUserData'




const Layout = () => {
  
   const user = useFetchUserData()  


  return (
    <>
      <Header data={user} />
      <Outlet context={user} />
    </>
    
  )
}

export default Layout