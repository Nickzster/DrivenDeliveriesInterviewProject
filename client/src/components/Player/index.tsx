import React, { useState } from "react";
import DropDown from "./DropDown";

const shapeChoices = ["circle", "square"];

const playerOneColorChoices = ["red", "yellow", "orange"];

const playerTwoColorChoices = ["black", "blue", "green"];

const playerChoices = [
  {
    key: "playerOneColorChoice",
    pretty: "Player One Color Choices",
    choices: playerOneColorChoices,
  },
  {
    key: "playerOneShapeChoice",
    pretty: "Player One Shape Choice",
    choices: shapeChoices,
  },
  {
    key: "playerTwoColorChoice",
    pretty: "Player Two Color Choice",
    choices: playerTwoColorChoices,
  },
  {
    key: "playerTwoShapeChoice",
    pretty: "Player Two Shape Choice",
    choices: shapeChoices,
  },
];

interface Props {
  onChange: Function;
  repaint: Function;
}

const Players: React.FC<Props> = (props) => {
  const { onChange, repaint } = props;
  return (
    <>
      {playerChoices.map((choice) => (
        <DropDown
          name={choice.key}
          pretty={choice.pretty}
          values={choice.choices}
          onChange={onChange}
          repaint={repaint}
        />
      ))}
    </>
  );
};

export default Players;
