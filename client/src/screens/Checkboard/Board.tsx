import React, { useState } from "react";
import "./styles/board.css";
import { generateBoard } from "../../lib/Board";
import Piece from "../../components/Piece";

const Board = () => {
  const [size, updateSize] = useState("8");
  const [boardSize, updateBoardSize] = useState(generateBoard(size));
  const onChange = (e: any) => {
    updateSize(e.target.value);
  };
  const onSubmit = (e: any) => {
    updateBoardSize(generateBoard(size));
  };
  return (
    <div className='screen'>
      <div className='board'>
        {boardSize.map((rows) => (
          <div className='rows'>
            {rows.map((element) => (
              <p className='element'>
                <Piece color={element.color} shape={element.shape} />
              </p>
            ))}
          </div>
        ))}
      </div>
      <input
        type='number'
        name='size'
        value={size}
        onChange={(e) => onChange(e)}
        placeholder='Insert size here'
      ></input>
      <button onClick={(e) => onSubmit(e)}>Change Size</button>
    </div>
  );
};

export default Board;
