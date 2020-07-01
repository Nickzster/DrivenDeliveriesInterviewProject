export const generateBoard = (size: number) => {
  let board = new Array(size);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(size).fill("");
  }
  return board;
};
