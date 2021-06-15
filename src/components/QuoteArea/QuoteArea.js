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

export default QuoteArea