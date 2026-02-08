function GameOver({ winner, onRestart }) {
  return (
    <div>
      <h2>
        {winner ? `Winner: ${winner}` : "It's a draw!"}
      </h2>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}

export default GameOver;