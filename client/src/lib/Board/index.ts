// Board Utility
// Updates the board

// Each piece on the board has a color, and a shape
export interface PieceProps {
  color: string;
  shape: string;
  belongsTo: number;
}

// Parse the incoming string and ensure that it is ALWAYS a number.
const checkSize = (size: any) => {
  if (!size) return 8;
  if (typeof size == "string") return parseInt(size, 10);
  return size;
};

//Utility to fill a row with pieces.
const initalizeSquare = (
  color: string,
  shape: string,
  belongsTo: number,
  size: number
) => {
  return new Array(size).fill({
    color,
    shape,
    belongsTo,
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
    board[i] = initalizeSquare("red", "circle", 0, size);
  }
  for (let i = 2; i < size - 2; i++) {
    board[i] = initalizeSquare("", "", -1, size);
  }
  for (let i = size - 2; i < size; i++) {
    board[i] = initalizeSquare("#292929", "circle", 1, size);
  }
  return board;
};

// Update the pieces on the board to the player's desired settings.
//TODO: Come up with better algorithm to do this.
export const changeBoard = (
  playerOneChanges: PieceProps,
  playerTwoChanges: PieceProps,
  board: PieceProps[][]
) => {
  let newBoard: PieceProps[][] = board;
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard.length; j++) {
      if (board[i][j].belongsTo === 0) {
        newBoard[i][j] = playerOneChanges;
      }
      if (board[i][j].belongsTo === 1) {
        newBoard[i][j] = playerTwoChanges;
      }
    }
  }
  return newBoard;
};
