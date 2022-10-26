import "./Style.css";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import { utils, colors } from "./utils";
import React, { useState } from "react";
import PlayAgain from "./PlayAgain";
const StarGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
  };
  const isGameDone = availableNums.length === 0;
  const candidateAreWrong = utils.sum(candidateNums) > stars;
  const statusCondition = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidateAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onClickChange = (number, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (utils.sum(newCandidateNums) === stars) {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9));
    } else {
      setCandidateNums(newCandidateNums);
    }
  };

  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {isGameDone ? (
              <PlayAgain clickToReset={resetGame} />
            ) : (
              <StarsDisplay count={stars} />
            )}
          </div>
          <div className="right">
            {utils.range(1, 9).map((number) => (
              <PlayNumber
                key={number}
                number={number}
                onClick={onClickChange}
                status={statusCondition(number)}
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
