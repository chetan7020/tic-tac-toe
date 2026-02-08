import { useState } from "react";
import { calculateWinner } from "../utils/calculateWinner";

export function useTicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const board = history[currentMove];
    const currentPlayer = currentMove % 2 === 0 ? "X" : "O";

    const winner = calculateWinner(board);
    const isDraw = checkDraw(board, winner);

    function selectSquare(index) {
        if (!canMakeMove(index)) return;

        const nextBoard = createNextBoard(index);
        commitMove(nextBoard);
    }

    function canMakeMove(index) {
        return !board[index] && !winner;
    }

    function createNextBoard(index) {
        const nextBoard = [...board];
        nextBoard[index] = currentPlayer;
        return nextBoard;
    }

    function commitMove(nextBoard) {
        const nextHistory = history.slice(0, currentMove + 1);
        setHistory([...nextHistory, nextBoard]);
        setCurrentMove(nextHistory.length);
    }

    function undo() {
        if (currentMove === 0) return;
        setCurrentMove(m => m - 1);
    }

    function resetGame() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return {
        board,
        currentPlayer,
        winner,
        isDraw,
        canUndo: currentMove > 0,
        selectSquare,
        undo,
        resetGame,
    };
}

function checkDraw(board, winner) {
    return board.every(cell => cell !== null) && !winner;
}