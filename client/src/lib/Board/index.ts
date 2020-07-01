// Generate Board utility. Takes an input of "string"
// Outputs an array that represents the board with the given size.

interface SquareProps {
  color: string;
  shape: string;
}

const checkSize = (size: any) => {
  if (!size) return 8;
  if (typeof size == "string") return parseInt(size, 10);
};

export const generateBoard = (sizeStr: string): SquareProps[][] => {
  let size = checkSize(sizeStr);
  let board: SquareProps[][] = new Array(size);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(size).fill({
      color: "",
      shape: "",
    });
  }
  return board;
};

export const initalizeBoard = (sizeStr: string): SquareProps[][] => {
  let size = checkSize(sizeStr);
  let board: SquareProps[][] = new Array(size);
  for (let i = 0; i < 2; i++) {
    board[i] = new Array(size).fill({
      color: "red",
      shape: "circle",
    });
  }
};
