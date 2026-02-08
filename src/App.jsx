import {useState} from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import {calculateWinner} from "./utils/calculateWinner"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell != null) && !winner;

  function handleSelect(index) {
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

  function restartGame(){
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      {(!winner && !isDraw) && (
        <p>Current Turn: {isXTurn ? "X" : "O"}</p>
      )}

      <GameBoard board={board} onSelect={handleSelect}/>

      {(winner || isDraw) && (
        <GameOver winner={winner} onRestart={restartGame}/>
      )}
    </div>
  );
}

export default App
