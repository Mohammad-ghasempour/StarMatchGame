import { useState, useEffect } from "react";
import { utils } from "./utils";

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setavailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setcandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameStatus = (newCandidateNumbers) => {
    if (utils.sum(newCandidateNumbers) === stars) {
      const newavailableNumbers = availableNumbers.filter(
        (n) => !newCandidateNumbers.includes(n)
      );
      setavailableNumbers(newavailableNumbers);
      setcandidateNumbers([]);
      setStars(utils.randomSumIn(newavailableNumbers, 9));
    } else {
      setcandidateNumbers(newCandidateNumbers);
    }
  };

  return {
    stars,
    candidateNumbers,
    availableNumbers,
    secondsLeft,
    setGameStatus,
  };
};

export default useGameState;
