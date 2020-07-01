import React, { useState } from "react";
import "./styles/board.css";
import { generateBoard } from "../../lib/Board/GenerateBoard";

const Board = () => {
  const [form, updateForm] = useState({
    num: 8,
  });
  const [boardSize, updateBoardSize] = useState(generateBoard(8));
  const onChange = (e: any) => {
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    updateBoardSize(generateBoard(form.num));
  };
  return (
    <div className='screen'>
      <div className='board'>
        {boardSize.map((rows) => (
          <div className='rows'>
            {rows.map((element: string) => (
              <p className='element'>{element}</p>
            ))}
          </div>
        ))}
      </div>
      <input
        type='number'
        name='num'
        value={form.num}
        onChange={(e) => onChange(e)}
        placeholder='Insert size here'
      ></input>
      <button onClick={(e) => onSubmit(e)}>Change Size</button>
    </div>
  );
};

export default Board;
