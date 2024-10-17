import React, {useEffect, useState} from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {CronJob} from 'cron'


import Header from './Header'
import useFetchUserData from '../customHooks/useFetchUserData'
import SpotifyAuth from '../api/SpotifyAuth'


const Layout = () => {

  


  let user
  const job = new CronJob(
    '*/59 * * * *',
    function () {
      SpotifyAuth()
    }, 
    null, 
    true, 
    'Europe/Warsaw'
  );
  job.start()
  //
  
   user = useFetchUserData()
 
  
  
  return (
    <>
      <Header data={user} />
      <Outlet context={user}/>
    </>
    
  )
}

export default Layout