import React, { useState } from 'react';
import './LanguagesModule.css';

interface Lesson {
  id: string;
  title: string;
  vocabulary: { word: string; translation: string }[];
  completed: boolean;
}

const LESSONS: Record<string, Lesson[]> = {
  English: [
    {
      id: '1',
      title: 'Saludos Básicos',
      vocabulary: [
        { word: 'Hello', translation: 'Hola' },
        { word: 'Good morning', translation: 'Buenos días' },
        { word: 'Thank you', translation: 'Gracias' },
      ],
      completed: false,
    },
    {
      id: '2',
      title: 'Números',
      vocabulary: [
        { word: 'One', translation: 'Uno' },
        { word: 'Two', translation: 'Dos' },
        { word: 'Ten', translation: 'Diez' },
      ],
      completed: false,
    },
  ],
  Français: [
    {
      id: '1',
      title: 'Salutations',
      vocabulary: [
        { word: 'Bonjour', translation: 'Buenos días' },
        { word: 'Merci', translation: 'Gracias' },
        { word: 'Au revoir', translation: 'Adiós' },
      ],
      completed: false,
    },
  ],
};

export const LanguagesModule: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});

  const lessons = LESSONS[selectedLanguage] || [];

  return (
    <div className="module-container languages-module">
      <h1>🌐 Idiomas</h1>
      <p>Aprende nuevos idiomas de forma interactiva</p>

      <div className="language-selector">
        {Object.keys(LESSONS).map((lang) => (
          <button
            key={lang}
            className={`lang-btn ${selectedLanguage === lang ? 'active' : ''}`}
            onClick={() => {
              setSelectedLanguage(lang);
              setSelectedLesson(null);
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {!selectedLesson ? (
        <div className="lessons-grid">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="lesson-card"
              onClick={() => setSelectedLesson(lesson)}
            >
              <h3>{lesson.title}</h3>
              <p>{lesson.vocabulary.length} palabras</p>
              {lesson.completed && <span className="completed-badge">✓</span>}
            </div>
          ))}
        </div>
      ) : (
        <div className="lesson-content">
          <button onClick={() => setSelectedLesson(null)} className="back-btn">← Volver</button>
          <h2>{selectedLesson.title}</h2>

          <div className="vocabulary-grid">
            {selectedLesson.vocabulary.map((vocab, idx) => (
              <div key={idx} className="vocab-card">
                <div className="vocab-word">{vocab.word}</div>
                <button
                  className="translation-toggle"
                  onClick={() =>
                    setShowTranslation({
                      ...showTranslation,
                      [idx]: !showTranslation[idx],
                    })
                  }
                >
                  {showTranslation[idx] ? '✕' : '?'}
                </button>
                {showTranslation[idx] && (
                  <div className="vocab-translation">{vocab.translation}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
