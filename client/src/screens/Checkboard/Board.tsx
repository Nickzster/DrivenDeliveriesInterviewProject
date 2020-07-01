import React, { useState } from "react";
import "./styles/board.css";
import { generateBoard, initalizeBoard, PieceProps } from "../../lib/Board";
import Piece from "../../components/Piece";

interface Props {
  board: PieceProps[][];
}

const Board: React.FC<Props> = (props) => {
  const { board } = props;
  return (
    <div className='screen'>
      <div className='board'>
        {board.map((rows) => (
          <div className='rows'>
            {rows.map((element) => (
              <p className='element'>
                <Piece color={element.color} shape={element.shape} />
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
