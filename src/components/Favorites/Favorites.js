import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import './Favorites.css'

const Favorites = ( {favoritesArray} ) => {
    const favoritesCards = favoritesArray.map((fave, index) => {
        return (
            <QuoteCard animeQuote={fave} key={index}/>
        )
    })
    return (
        <div className='favoritesList'>
            {favoritesCards}
        </div>
    )
}
  
  export default Favorites