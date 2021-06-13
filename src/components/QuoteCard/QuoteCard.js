import React from 'react'
import './QuoteCard.css'

const QuoteCard =( props ) => {
const { anime, character, quote } = props.animeQuote
    return (
      <div className='card'>
        <h1>{anime}</h1>
        <h2>{quote}</h2>
        <h2>- {character}</h2>
      </div>
    )
  }

export default QuoteCard