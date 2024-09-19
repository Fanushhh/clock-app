import React, { useEffect } from "react";
import { useStore } from "../useStore";

const QuoteComponent = () => {
  const quote = useStore((state) => state.quote);
  const fetchQuote = useStore((state) => state.fetchQuote);
  const moreDetails = useStore((state) => state.moreDetails);

  useEffect(() => {
    
    fetchQuote();
  }, []);

  console.log("Quote component re-rendered");

  return (
    <div className={`quote-wrapper ${moreDetails ? "hide-quote" : ""}`}>
      <p className="quote">{quote?.quote}</p>
      <div className="refresh-icon" onClick={fetchQuote}>
        <img src="./assets/desktop/icon-refresh.svg" />
      </div>
    </div>
  );
};

export const Quote = React.memo(QuoteComponent);
