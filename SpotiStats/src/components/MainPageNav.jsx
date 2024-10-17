import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainPageNav = (props) => {
    const {handleTermChange, term} = props
    const ActiveStyle={
        backgroundColor:"#B1B1B1",
        color:"#353535",
        fontWeight:'bold',
        fontSize:"12px",
        padding:"7px",
        textAlign:"center",
        borderRadius:"10px"
    }

    const style = {
        backgroundColor: "#353535",
        color:"#B0B0B0",
        fontWeight:'bold',
        padding:"7px", 
        fontSize:"12px",
        borderRadius:"10px",
        textAlign:"center"
    }

  return (
    <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row space-x-4 ml-4 mt-4'>
                <NavLink
                to="/"
                style={({isActive}) => isActive ? ActiveStyle : style}
                >
                    <div className=''>ALL</div>
                </NavLink>

                <NavLink
                to="/tracks"
                style={({isActive}) => isActive ? ActiveStyle : style}
                className=""
                >
                    <p className=''>TRACKS</p>
                </NavLink>
                <NavLink
                to="/artists"
                style={({isActive}) => isActive ? ActiveStyle : style}
                >

                    <p className=''>ARTISTS</p>
                </NavLink>
                <NavLink
                to="/new"
                style={({isActive}) => isActive ? ActiveStyle : style}
                >

                    <p className=''>NEW</p>
                </NavLink>

            </div>
            <div className='mt-4 mr-2'>
                <select
                        name='term'
                        className='bg-[#353535] text-[#B0B0B0] text-center text-xs rounded-lg py-2 px-1 font-semibold'
                        onChange={handleTermChange}
                        // onKeyDown={onKeyDown}
                        value={term.term}
                        >
                        <option value="short_term">MONTH</option>
                        <option value="medium_term">6 MONTS</option>
                        <option value="long_term">YEAR</option>
                        </select>
            </div>
    
     </div>
  )
}

export default MainPageNav