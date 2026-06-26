import React, { useState } from 'react';
import './HistoryModule.css';

interface HistoricalEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const HISTORY_EVENTS: HistoricalEvent[] = [
  {
    id: '1',
    title: 'Imperio Romano',
    description: 'El Imperio Romano fue una de las civilizaciones más grandes. Abarcó tres continentes y duró más de 1000 años.',
    date: '27 a.C. - 476 d.C.',
    category: 'Civilización Antigua',
  },
  {
    id: '2',
    title: 'Antigua Grecia',
    description: 'Cuna de la democracia y la filosofía occidental. Las ciudades-estado griegas fueron centros de conocimiento.',
    date: '800 a.C. - 146 a.C.',
    category: 'Civilización Antigua',
  },
  {
    id: '3',
    title: 'Antiguo Egipto',
    description: 'Civilización a orillas del Nilo. Famosa por sus pirámides, faraones y sistema jeroglífico.',
    date: '3100 a.C. - 30 a.C.',
    category: 'Civilización Antigua',
  },
  {
    id: '4',
    title: 'Sumerios',
    description: 'Primer estado-ciudad en Mesopotamia. Inventaron la escritura cuneiforme.',
    date: '3500 a.C. - 1900 a.C.',
    category: 'Civilización Antigua',
  },
  {
    id: '5',
    title: 'Primera Guerra Mundial',
    description: 'Conflicto global que cambió el mapa político europeo. 1914-1918.',
    date: '1914-1918',
    category: 'Guerras',
  },
  {
    id: '6',
    title: 'Segunda Guerra Mundial',
    description: 'Conflicto global más mortífero. 1939-1945.',
    date: '1939-1945',
    category: 'Guerras',
  },
];

export const HistoryModule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [...new Set(HISTORY_EVENTS.map((e) => e.category))];
  const filteredEvents =
    categoryFilter === 'all'
      ? HISTORY_EVENTS
      : HISTORY_EVENTS.filter((e) => e.category === categoryFilter);

  return (
    <div className="module-container history-module">
      <h1>📖 Historia</h1>
      <p>Enciclopedia interactiva de eventos históricos</p>

      <div className="category-filter">
        <button
          className={categoryFilter === 'all' ? 'active' : ''}
          onClick={() => setCategoryFilter('all')}
        >
          Todo
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={categoryFilter === cat ? 'active' : ''}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {!selectedEvent ? (
        <div className="events-timeline">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="timeline-item"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p className="category-badge">{event.category}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="event-detail">
          <button onClick={() => setSelectedEvent(null)} className="back-btn">← Volver</button>
          <h2>{selectedEvent.title}</h2>
          <p className="date-detail">{selectedEvent.date}</p>
          <p className="description">{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};
