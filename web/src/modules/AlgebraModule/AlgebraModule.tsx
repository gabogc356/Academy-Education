import React, { useState } from 'react';
import { anthropicService } from '../../../shared/services/anthropic.service';
import './AlgebraModule.css';

export const AlgebraModule: React.FC = () => {
  const [equation, setEquation] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);

  const solveEquation = async () => {
    setLoading(true);
    try {
      const result = await anthropicService.solveEquation(equation);
      setSolution(result);
    } catch (error) {
      console.error('Error solving equation:', error);
      setSolution('Error al resolver la ecuación. Intenta con otro formato.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="module-container algebra-module">
      <h1>🔢 Álgebra</h1>
      <p>Asistente IA para resolver ecuaciones algebraicas</p>

      <div className="solver-section">
        <div className="input-group">
          <label>Ingresa tu ecuación:</label>
          <input
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            placeholder="Ej: 2x + 5 = 13"
          />
          <button onClick={solveEquation} disabled={loading || !equation}>
            {loading ? '⏳ Resolviendo...' : '✨ Resolver'}
          </button>
        </div>

        {solution && (
          <div className="solution-box">
            <h3>Solución:</h3>
            <div className="solution-content">
              {solution}
            </div>
          </div>
        )}
      </div>

      <div className="examples-section">
        <h2>Ejemplos Comunes:</h2>
        <div className="examples-grid">
          {[
            { title: 'Ecuación Lineal', example: '3x - 7 = 2' },
            { title: 'Ecuación Cuadrática', example: 'x² - 5x + 6 = 0' },
            { title: 'Sistema de Ecuaciones', example: '2x + y = 5, x - y = 1' },
          ].map((ex, idx) => (
            <div
              key={idx}
              className="example-card"
              onClick={() => setEquation(ex.example)}
            >
              <h4>{ex.title}</h4>
              <p>{ex.example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
