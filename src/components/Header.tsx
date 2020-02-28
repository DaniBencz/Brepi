import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <NavLink to='/' className='nav-link' activeClassName='selected' exact>Home</NavLink>
      <NavLink to='/beers' className='nav-link' activeClassName='selected'>Beers</NavLink>
      <NavLink to='/orders' className='nav-link' activeClassName='selected'>Orders</NavLink>
      <NavLink to='/1' className='nav-link' activeClassName='selected'>Custom</NavLink>
    </div>
  )
}

export default Header