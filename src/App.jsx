import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {

  const {
      board,
      currentPlayer,
      winner,
      isDraw,
      canUndo,
      selectSquare,
      undo,
      resetGame
  } = useTicTacToe();

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      {(!winner && !isDraw) && (
        <p>Current Turn: {currentPlayer}</p>
      )}

      <GameBoard board={board} onSelect={selectSquare}/>

      {(!winner && !isDraw) && (
        <div>
          <button onClick={undo} disabled={!canUndo}>Undo</button>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}

      {(winner || isDraw) && (
        <GameOver winner={winner} onRestart={resetGame}/>
      )}
    </div>
  );
}

export default App
