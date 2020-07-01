import React, { useState } from "react";
import Radio from "./Radio";
import DropDown from "./DropDown";

const playerOneColorChoices = ["red", "orange", "yellow"];
const playerOneShapeChoices = ["circle", "square"];

const playerTwoColorChoices = ["black", "blue", "green"];
const playerTwoShapeChoices = ["circle", "square"];

interface Props {
  playerOneCB: Function;
  playerTwoCB: Function;
}

//TODO: Refactor
const Players: React.FC<Props> = (props) => {
  const { playerOneCB, playerTwoCB } = props;
  return (
    <div className='radio-container'>
      <p>Player One Choices</p>
      <DropDown
        name='playeronecolorchoices'
        values={playerOneColorChoices}
        cb={playerOneCB}
      />
      <DropDown
        name='playeroneshapechoices'
        values={playerOneShapeChoices}
        cb={playerOneCB}
      />
      <p>Player Two Choices</p>
      <DropDown
        name='playertwocolorchoices'
        values={playerTwoColorChoices}
        cb={playerTwoCB}
      />
      <DropDown
        name='playertwoshapechoices'
        values={playerTwoShapeChoices}
        cb={playerTwoCB}
      />
    </div>
  );
};

export default Players;
