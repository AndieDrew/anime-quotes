import React from "react";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./QuoteArea.css";

const QuoteArea = ({ animeQuote }) => {
  return (
    <div className="area">
      <QuoteCard animeQuote={animeQuote} />
    </div>
  );
};

export default QuoteArea;