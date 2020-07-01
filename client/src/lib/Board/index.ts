// Board Utility
// Updates the board

// Each piece on the board has a color, and a shape
export interface PieceProps {
  color: string;
  shape: string;
}

// Parse the incoming string and ensure that it is ALWAYS a number.
const checkSize = (size: any) => {
  if (!size) return 8;
  if (typeof size == "string") return parseInt(size, 10);
  return size;
};

//Utility to fill a row with pieces.
const initalizeSquare = (color: string, shape: string, size: number) => {
  return new Array(size).fill({
    color,
    shape,
  });
};

// Paint an empty board
export const generateBoard = (sizeStr: string): PieceProps[][] => {
  let size = checkSize(sizeStr);
  if (size < 4) size = 4;
  let board: PieceProps[][] = new Array(size);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(size).fill({
      color: "",
      shape: "",
    });
  }
  return board;
};

// Paint a board in specification with Task # 2
export const initalizeBoard = (sizeStr: string): PieceProps[][] => {
  let size = checkSize(sizeStr);
  let board: PieceProps[][] = new Array(size);
  for (let i = 0; i < 2; i++) {
    board[i] = initalizeSquare("red", "circle", size);
  }
  for (let i = 2; i < size - 2; i++) {
    board[i] = initalizeSquare("", "", size);
  }
  for (let i = size - 2; i < size; i++) {
    board[i] = initalizeSquare("#292929", "circle", size);
  }
  return board;
};

// Update the pieces on the board to the player's desired settings.
//TODO: Come up with better algorithm to do this.
export const changeBoard = (
  prevProp: PieceProps,
  newProp: PieceProps,
  board: PieceProps[][],
  size: any
) => {
  let correctedSize = checkSize(size);
  let newBoard: PieceProps[][] = generateBoard(correctedSize);
  if (prevProp.color !== newProp.color || prevProp.shape !== newProp.shape) {
    for (let i = 0; i < correctedSize; i++) {
      for (let j = 0; j < correctedSize; j++) {
        if (board[i][j].shape === prevProp.shape)
          newBoard[i][j].shape = newProp.shape;
        if (board[i][j].color === prevProp.color)
          newBoard[i][j].color = newProp.color;
      }
    }
    return newBoard;
  }
  return board;
};
