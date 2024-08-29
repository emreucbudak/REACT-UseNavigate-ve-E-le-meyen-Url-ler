import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutUS'>About US</NavLink>

    </nav>
  )
}

export default Navbar