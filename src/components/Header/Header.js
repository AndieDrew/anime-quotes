import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
      <header className='header'>
          <h1 className='pageTitle'>Anime Quotes</h1>

          <ul className='nav-links'>
        <li>
          <NavLink
            exact to='/'
            activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to='/favorites'
            activeClassName="active">
            Favorites
          </NavLink>
        </li>
      </ul>
      </header>
    )
  }

export default Header