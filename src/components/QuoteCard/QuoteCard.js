import React from 'react'
import { getQuote } from '../../util/api-calls'
import './QuoteCard.css'

const QuoteCard =() => {
  getQuote()
    return (
      <div className='card'>
        <h1>Future QuoteCard</h1>
      </div>
    )
  }

export default QuoteCard