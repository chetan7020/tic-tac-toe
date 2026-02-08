import { useState } from "react";
import { calculateWinner } from "../utils/calculateWinner";

export function useTicTacToe(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell != null) && !winner;

  function selectSquare(index) {
    if(board[index] || winner) return;

    setBoard(
      prevBoard => {
        const updatedBoard = [...prevBoard];
        updatedBoard[index] = isXTurn ? "X" : "O";
        return updatedBoard;
      }
    );

    setIsXTurn(prev => !prev);
  }

  function resetGame(){
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return {
    board,
    currentPlayer: isXTurn ? "X" : "O",
    winner,
    isDraw,
    selectSquare,
    resetGame
  }
}