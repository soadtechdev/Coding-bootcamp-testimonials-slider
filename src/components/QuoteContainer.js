import React from "react";

const QuoteContainer = ({ quote, name, profession, animation }) => {
  return (
    <div
      className={
        animation ? "quote__container animationText" : "quote__container"
      }
    >
      <p className="quote__container--description">{quote}</p>
      <div className="quote__cite">
        <cite className="quote__cite--name">
          {name}
          <span className="quote__cite--profession">{profession}</span>
        </cite>
      </div>
    </div>
  );
};

export default QuoteContainer;
