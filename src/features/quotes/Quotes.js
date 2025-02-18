import React from "react";
import QuoteCard from "./QuoteCard";
import {useSelector} from "react-redux";

function Quotes() {
  const quotesList = useSelector((state) => state.quotes);

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotesList.map((quote) => (
              <QuoteCard quote={quote} key={quote.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
