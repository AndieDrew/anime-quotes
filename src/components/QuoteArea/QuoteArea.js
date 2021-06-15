import React from "react"
import QuoteCard from "../QuoteCard/QuoteCard"
import PropTypes from 'prop-types'
import "./QuoteArea.css"

const QuoteArea = ({ animeQuote }) => {
  return (
    <div className="area">
      <QuoteCard animeQuote={animeQuote} />
    </div>
  )
}

QuoteArea.propTypes = {
  animeQuote: PropTypes.shape({
    anime: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  })
}

export default QuoteArea