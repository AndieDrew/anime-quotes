import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import './Favorites.css'

const Favorites = ( {favoritesArray} ) => {
    const favoritesCards = favoritesArray.map(fave => {
        return (
            <QuoteCard animeQuote={fave}/>
        )
    })
    return (
        <div className='favoritesList' key='key'>
            {favoritesCards}
        </div>
    )
}
  
  export default Favorites