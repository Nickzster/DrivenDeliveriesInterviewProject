import React, { useState } from "react";
import "./styles/board.css";
import { board } from "./VirtualBoard";

const Board = () => {
  const [boardSize, updateBoardSize] = useState([
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ]);

  return (
    <div className='screen'>
      <div className='board'>
        {boardSize.map((rows) => (
          <div className='rows'>
            {rows.map((element) => (
              <p className='element'>{element}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
