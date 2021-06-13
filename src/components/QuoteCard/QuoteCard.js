import React from 'react'
import './QuoteCard.css'

const QuoteCard =( props ) => {
const { anime, character, quote } = props.animeQuote
    return (
        <article className='card'>
          <h1 className='animeTitle'>{anime}</h1>
          <h2 className='animeQuote'>{quote}</h2>
          <h2 className='animeCharacter'>- {character}</h2>
          <button className='newQuoteBtn' >New Quote</button>
          <button className='favoriteBtn' >Favorite</button>
        </article>
    )
  }

export default QuoteCard