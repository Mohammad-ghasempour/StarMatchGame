import React from "react";

export default function PlayAgain(props) {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: props.gameStatus === "won" ? "green" : "red" }}
      >
        {props.gameStatus === "won" ? "Congrats" : "GameOver"}
      </div>
      <button onClick={props.clickToReset}>Play Again</button>
    </div>
  );
}
