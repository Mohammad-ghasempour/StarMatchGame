import "./Style.css";
import {utils , colors}  from './utils'
import React , { useState } from "react";
const StarGame = () => {
  const [stars, setStars] = useState(utils.random(1,9));

  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {utils.range(1, stars).map((starId) => (
              <div key={starId} className="star" />
            ))}
          </div>
          <div className="right">
            {utils.range(1, 9).map((number) => (
              <button key={number} className="number">
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    </div>
  );
};

export default StarGame;
