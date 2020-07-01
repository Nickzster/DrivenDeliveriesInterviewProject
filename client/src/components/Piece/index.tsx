import React, { useState } from "react";
import "./styles/shapes.css";

interface Props {
  color: string;
  shape: string;
}

const Piece: React.FC<Props> = (props) => {
  const { color, shape } = props;
  return <div style={{ backgroundColor: color }} className={shape}></div>;
};

export default Piece;
