import React, { useState } from "react";
import { initalizeBoard } from "../../lib/Board";
import CheckerBoard from "../Checkboard";

const Game = () => {
  const [size, updateSize] = useState("8");
  const [board, updateBoard] = useState(initalizeBoard(size));
  const onChange = (e: any) => {
    updateSize(e.target.value);
  };
  const onSubmit = (e: any) => {
    updateBoard(initalizeBoard(size));
  };
  return (
    <div>
      <CheckerBoard board={board} />
    </div>
  );
};

export default Game;
