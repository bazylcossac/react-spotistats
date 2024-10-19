import React, {useEffect, useState} from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {CronJob} from 'cron'


import Header from './Header'
import useFetchUserData from '../customHooks/useFetchUserData'
import SpotifyAuth from '../api/SpotifyAuth'



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