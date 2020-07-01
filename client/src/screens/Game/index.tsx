import React, { useState } from "react";
import { initalizeBoard } from "../../lib/Board";
import CheckerBoard from "../../components/Checkboard";
import ChangeSize from "../../components/ChangeSize";

import "./styles/game.css";
import Players from "../../components/Player";

const Game = () => {
  const [playerOne, updatePlayerOne] = useState({
    color: "red",
    shape: "circle",
  });
  const [playerTwo, updatePlayerTwo] = useState({
    color: "black",
    shape: "circle",
  });
  const [size, updateSize] = useState("8");
  const [board, updateBoard] = useState(initalizeBoard(size));
  //TODO: Refactor this into a single function
  const updatePlayer1 = (e: any) => {
    updatePlayerOne({ ...playerOne, [e.target.name]: e.target.value });
  };
  const updatePlayer2 = (e: any) => {
    updatePlayerTwo({ ...playerTwo, [e.target.name]: e.target.value });
  };
  const onChange = (e: any) => {
    updateSize(e.target.value);
  };
  const onSubmit = (e: any) => {
    updateBoard(initalizeBoard(size));
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
      <Players playerOneCB={updatePlayer1} playerTwoCB={updatePlayer2} />
    </div>
  );
};

export default Game;
