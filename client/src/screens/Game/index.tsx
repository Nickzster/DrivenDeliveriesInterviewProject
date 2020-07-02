import React, { useState } from "react";
import { initalizeBoard, changeBoard } from "../../lib/Board";
import CheckerBoard from "../../components/Checkboard";
import ChangeSize from "../../components/ChangeSize";

import "./styles/game.css";
import Players from "../../components/Player";

const Game = () => {
  const [playerChoices, updatePlayerChoices] = useState({
    playerOneColor: "red",
    playerOneShape: "circle",
    playerTwoColor: "black",
    playerTwoShape: "circle",
  });
  const [size, updateSize] = useState("8");
  const [board, updateBoard] = useState(initalizeBoard(size));
  //TODO: Refactor this into a single function
  const updatePlayer = (e: any) => {
    updatePlayerChoices({ ...playerChoices, [e.target.name]: e.target.value });
  };
  const onChange = (e: any) => {
    updateSize(e.target.value);
  };
  const onSubmit = (e: any) => {
    updateBoard(initalizeBoard(size));
  };
  const repaint = (e: any) => {
    updateBoard(
      changeBoard(
        {
          color: playerChoices.playerOneColor,
          shape: playerChoices.playerOneShape,
          belongsTo: 0,
        },
        {
          color: playerChoices.playerTwoColor,
          shape: playerChoices.playerTwoShape,
          belongsTo: 1,
        },
        board
      )
    );
  };
  return (
    <div className='game'>
      <CheckerBoard board={board} />
      <ChangeSize
        onChange={onChange}
        onSubmit={onSubmit}
        name='size'
        value={size}
      />
      <Players onChange={updatePlayer} repaint={repaint} />
    </div>
  );
};

export default Game;
