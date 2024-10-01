import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white text-xl'>
        <span className="text-white font-bold mx-8 py-2">iTask</span>
        <ul className="flex gap-8 mx-8 pt-4">
            <NavLink className={(e)=>{return e.isActive?"white":""}} to="/"><li className='cursor-pointer hover:font-semibold text-base transition-all'>Your Tasks</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"white":""}} to="/profile"><li className='cursor-pointer hover:font-semibold text-base transition-all'>Profile</li></NavLink>
            
        </ul>
      
    </nav>
  )
}

export default Navbar
