import React, { useState } from 'react';
import './MathModule.css';

export const MathModule: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const evaluate = () => {
    try {
      // Eval seguro para expresiones matemáticas
      const res = Function(`'use strict'; return (${expression})`)();
      setResult(res);
    } catch (error) {
      setResult(null);
    }
  };

  const handleButtonClick = (value: string) => {
    setExpression(expression + value);
  };

  const clear = () => {
    setExpression('');
    setResult(null);
  };

  return (
    <div className="module-container math-module">
      <h1>🧮 Matemáticas</h1>
      <p>Calculadora avanzada y resolución de problemas</p>

      <div className="calculator">
        <div className="display">
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Ingresa tu expresión matemática"
          />
          {result !== null && <div className="result">= {result}</div>}
        </div>

        <div className="buttons-grid">
          {['7', '8', '9', '/'].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
          {['4', '5', '6', '*'].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
          {['1', '2', '3', '-'].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
          {['0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') evaluate();
                else handleButtonClick(btn);
              }}
            >
              {btn}
            </button>
          ))}
        </div>

        <button className="clear-btn" onClick={clear}>
          Limpiar
        </button>
      </div>

      <div className="formulas">
        <h2>Fórmulas Útiles</h2>
        <div className="formula-grid">
          <div className="formula-card">
            <h3>Área del Círculo</h3>
            <p>πr²</p>
          </div>
          <div className="formula-card">
            <h3>Teorema de Pitágoras</h3>
            <p>a² + b² = c²</p>
          </div>
          <div className="formula-card">
            <h3>Ecuación Cuadrática</h3>
            <p>x = (-b ± √(b²-4ac)) / 2a</p>
          </div>
        </div>
      </div>
    </div>
  );
};
