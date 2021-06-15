import React from "react"
import QuoteCard from "../QuoteCard/QuoteCard"
import PropTypes from 'prop-types'
import "./Favorites.css"

const Favorites = ({ favoritesArray }) => {
  const favoritesCards = favoritesArray.map((fave, index) => {
    return <QuoteCard animeQuote={fave} key={index} />
  })
  return (
    <div className="favoritesList">
      {!favoritesArray.length && (
        <h1 className="noFavorites">You have no favorites!</h1>
      )}
      {favoritesCards}
    </div>
  )
}

Favorites.propTypes = {
  favoritesArray: PropTypes.arrayOf(PropTypes.object)
}

export default Favorites
