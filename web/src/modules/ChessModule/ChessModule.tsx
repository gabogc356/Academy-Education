import React, { useState } from 'react';
import './ChessModule.css';

export const ChessModule: React.FC = () => {
  const [gameState, setGameState] = useState('waiting');
  const [fen, setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

  return (
    <div className="module-container chess-module">
      <h1>♟️ Ajedrez</h1>
      <p>Juega ajedrez contra la IA o contra otro jugador</p>

      <div className="chess-container">
        <div className="chessboard">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
            [0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
              <div
                key={`${row}-${col}`}
                className={`square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`}
              />
            ))
          )}
        </div>

        <div className="chess-info">
          <h2>Estado del Juego</h2>
          <p>Turno: {gameState}</p>
          <div className="game-controls">
            <button className="btn-primary">Nuevo Juego</button>
            <button className="btn-secondary">Deshacer</button>
            <button className="btn-secondary">Rendirse</button>
          </div>

          <div className="move-list">
            <h3>Movimientos</h3>
            <div className="moves">
              <p>1. e2-e4 e7-e5</p>
              <p>2. g1-f3 b8-c6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
