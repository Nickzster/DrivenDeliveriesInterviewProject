// Generate Board utility. Takes an input of "string"
// Outputs an array that represents the board with the given size.

interface SquareProps {
  color: string;
  shape: string;
}

export const generateBoard = (sizeStr: string): SquareProps[][] => {
  if (!sizeStr) sizeStr = "8";
  let size = parseInt(sizeStr, 10);
  let board: SquareProps[][] = new Array(size);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(size).fill({
      color: "red",
      shape: "circle",
    });
  }
  return board;
};
