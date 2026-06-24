import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>🎓 Academy Education</h1>
        <p>Aprende con IA de forma interactiva y divertida</p>
        <div className="hero-buttons">
          {isAuthenticated ? (
            <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
              Ir al Dashboard
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="btn btn-primary">
                Iniciar Sesión
              </button>
              <button onClick={() => navigate('/register')} className="btn btn-secondary">
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">📚</span>
          <h3>17 Módulos Educativos</h3>
          <p>Desde libros con IA hasta simuladores 3D</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🤖</span>
          <h3>Powered by IA</h3>
          <p>OpenAI y Anthropic integrados</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h3>Interactivo</h3>
          <p>Juegos, simuladores y más</p>
        </div>
      </div>
    </div>
  );
};
