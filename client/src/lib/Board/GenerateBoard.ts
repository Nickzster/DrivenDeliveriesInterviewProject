export const generateBoard = (sizeStr: string) => {
  if (!sizeStr) sizeStr = "8";
  let size = parseInt(sizeStr, 10);
  let board = new Array(size);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(size).fill("");
  }
  return board;
};
