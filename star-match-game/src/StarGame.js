import "./Style.css";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import { utils, colors } from "./utils";
import React, { useState } from "react";
const StarGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums , setAvailableNums] = useState([1,2,3,4,5]);
  const [candidateNums , setCandidateNums] = useState([2,3]);

const candidateAreWrong = utils.sum(candidateNums) > stars;

const statusCondition = number =>{
 if (!availableNums.includes(number)){
  return 'used';
 }

 if (candidateNums.includes(number)){
  return candidateAreWrong ? 'wrong' : 'candidate'
 }
 return 'available'
}

  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarsDisplay count={stars} />
          </div>
          <div className="right">
            {utils.range(1, 9).map((number) => (
              <PlayNumber key={number}
              number={number}
              status= {statusCondition(number)}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    </div>
  );
};

export default StarGame;
