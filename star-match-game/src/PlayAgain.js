import React from "react";

export default function PlayAgain(props) {
  return (
    <div className="game-done">
      <button onClick={props.clickToReset}>Play Again</button>
    </div>
  );
}
