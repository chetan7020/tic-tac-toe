import Square from "./Square";

function GameBoard({ board, onSelect }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 60px)",
        gap: "5px",
      }}
    >
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
