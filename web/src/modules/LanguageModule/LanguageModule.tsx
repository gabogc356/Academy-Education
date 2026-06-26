import React, { useState } from 'react';
import './LanguageModule.css';

interface GrammarConcept {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

const GRAMMAR_CONCEPTS: GrammarConcept[] = [
  {
    id: '1',
    title: 'Sustantivos Propios',
    description: 'Nombres específicos de personas, lugares o cosas. Se escriben con mayúscula.',
    examples: ['Juan', 'España', 'El Quijote'],
  },
  {
    id: '2',
    title: 'Sustantivos Comunes',
    description: 'Nombres genéricos de personas, animales, lugares o cosas.',
    examples: ['libro', 'gato', 'mesa'],
  },
  {
    id: '3',
    title: 'Verbos',
    description: 'Palabras que indican acciones, estados o procesos.',
    examples: ['correr', 'ser', 'pensar'],
  },
  {
    id: '4',
    title: 'Adjetivos',
    description: 'Palabras que califican o describen sustantivos.',
    examples: ['hermoso', 'rápido', 'grande'],
  },
  {
    id: '5',
    title: 'Adverbios',
    description: 'Palabras que modifican verbos, adjetivos u otros adverbios.',
    examples: ['lentamente', 'muy', 'aquí'],
  },
];

export const LanguageModule: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<GrammarConcept | null>(null);

  return (
    <div className="module-container language-module">
      <h1>✍️ Lenguaje</h1>
      <p>Biblioteca educativa de gramática y vocabulario</p>

      {!selectedConcept ? (
        <div className="concepts-grid">
          {GRAMMAR_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              className="concept-card"
              onClick={() => setSelectedConcept(concept)}
            >
              <h3>{concept.title}</h3>
              <p>{concept.description.substring(0, 80)}...</p>
              <span className="examples-count">{concept.examples.length} ejemplos</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="concept-detail">
          <button onClick={() => setSelectedConcept(null)} className="back-btn">← Volver</button>
          <h2>{selectedConcept.title}</h2>
          <p className="description">{selectedConcept.description}</p>

          <div className="examples-section">
            <h3>Ejemplos:</h3>
            <div className="examples-list">
              {selectedConcept.examples.map((example, idx) => (
                <div key={idx} className="example-item">
                  <span className="example-number">{idx + 1}</span>
                  <span className="example-text">{example}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
