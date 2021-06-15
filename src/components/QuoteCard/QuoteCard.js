import React from "react"
import PropTypes from 'prop-types'
import "./QuoteCard.css"

const QuoteCard = (props) => {
  const { anime, character, quote } = props.animeQuote
  return (
    <article className="card">
      <h1 className="animeTitle">{anime}</h1>
      <h2 className="animeQuote">{quote}</h2>
      <h2 className="animeCharacter">- {character}</h2>
    </article>
  )
}

export default QuoteCard
