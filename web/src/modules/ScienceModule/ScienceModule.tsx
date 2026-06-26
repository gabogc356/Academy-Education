import React, { useState } from 'react';
import { anthropicService } from '../../../shared/services/anthropic.service';
import './ScienceModule.css';

export const ScienceModule: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const askAboutScience = async () => {
    setLoading(true);
    try {
      const result = await anthropicService.explainScience(topic);
      setExplanation(result);
    } catch (error) {
      console.error('Error fetching explanation:', error);
      setExplanation('Error al obtener explicación. Intenta otro tema.');
    } finally {
      setLoading(false);
    }
  };

  const SCIENCE_TOPICS = [
    '¿Cómo funciona la fotosíntesis?',
    '¿Qué es la gravitación?',
    '¿Cómo funciona el ciclo del agua?',
    '¿Qué es el ADN?',
  ];

  return (
    <div className="module-container science-module">
      <h1>🧪 Ciencias</h1>
      <p>Chatbot científico - Aprende sobre cualquier tema científico</p>

      <div className="science-container">
        <div className="input-section">
          <label>¿Qué quieres aprender?</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ingresa un tema científico..."
          />
          <button onClick={askAboutScience} disabled={loading || !topic}>
            {loading ? '⏳ Buscando...' : '🔬 Explicar'}
          </button>
        </div>

        <div className="topics-grid">
          {SCIENCE_TOPICS.map((t, idx) => (
            <button
              key={idx}
              className="topic-btn"
              onClick={() => {
                setTopic(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {explanation && (
        <div className="explanation-box">
          <h3>Explicación:</h3>
          <div className="explanation-content">
            {explanation}
          </div>
        </div>
      )}
    </div>
  );
};
