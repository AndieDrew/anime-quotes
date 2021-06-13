import React from 'react';
import './Header.css'

const Header = () => {
    return (
      <header className='header'>
        <span>
          <h1 className='pageTitle'>Anime Quotes</h1>
        </span>
        <button className='favorites' >Favorites</button>
      </header>
    )
  }

export default Header