import "./Style.css";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import { utils } from "./utils";
import PlayAgain from "./PlayAgain";
import useGameState from "./useGameState";

const StarGame = (props) => {
  const {
    stars,
    candidateNumbers,
    availableNumbers,
    secondsLeft,
    setGameStatus,
  } = useGameState();

  const gameStatus =
    availableNumbers.length === 0
      ? "won"
      : secondsLeft === 0
      ? "lost"
      : "active";

  const candidateAreWrong = utils.sum(candidateNumbers) > stars;
  const statusCondition = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidateAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onClickChange = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }

    const newCandidateNumbers =
      currentStatus === "available"
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter((cn) => cn !== number);
    setGameStatus(newCandidateNumbers);
  };

  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== "active" ? (
              <PlayAgain
                gameStatus={gameStatus}
                clickToReset={props.startNewGame}
              />
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
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    </div>
  );
};

export default StarGame;
