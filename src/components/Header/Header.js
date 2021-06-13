import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
      <header className='header'>
          <h1 className='pageTitle'>Anime Quotes</h1>
          <Link to='/favorites'>
            <button className='favorites' >Favorites</button>
          </Link>
      </header>
    )
  }

export default Header