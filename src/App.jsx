import {useState} from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import {calculateWinner} from "./utils/calculateWinner"
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {

  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    selectSquare,
    resetGame
  } = useTicTacToe();

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      {(!winner && !isDraw) && (
        <p>Current Turn: {currentPlayer}</p>
      )}

      <GameBoard board={board} onSelect={selectSquare}/>

      {(winner || isDraw) && (
        <GameOver winner={winner} onRestart={resetGame}/>
      )}
    </div>
  );
}

export default App
