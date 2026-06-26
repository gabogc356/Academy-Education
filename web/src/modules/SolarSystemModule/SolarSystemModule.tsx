import React, { useState } from 'react';
import './SolarSystemModule.css';

const PLANETS = [
  { name: 'Mercurio', distance: 40, size: 10, color: '#8c7853' },
  { name: 'Venus', distance: 70, size: 15, color: '#ffc649' },
  { name: 'Tierra', distance: 100, size: 15, color: '#4da6ff' },
  { name: 'Marte', distance: 130, size: 12, color: '#e27b58' },
  { name: 'Júpiter', distance: 180, size: 35, color: '#c88b3a' },
  { name: 'Saturno', distance: 230, size: 30, color: '#fad5a5' },
  { name: 'Urano', distance: 270, size: 25, color: '#4fd0e7' },
  { name: 'Neptuno', distance: 310, size: 24, color: '#4169e1' },
];

interface Planet {
  name: string;
  description: string;
}

const PLANET_INFO: Record<string, Planet> = {
  Mercurio: {
    name: 'Mercurio',
    description: 'El planeta más cercano al Sol. Tiene una temperatura extrema.',
  },
  Venus: {
    name: 'Venus',
    description: 'El planeta más caliente. Tiene una atmósfera muy densa.',
  },
  Tierra: {
    name: 'Tierra',
    description: 'Nuestro hogar. El único planeta con vida conocida.',
  },
  Marte: {
    name: 'Marte',
    description: 'El planeta rojo. Posible destino para futuras misiones.',
  },
  Júpiter: {
    name: 'Júpiter',
    description: 'El planeta más grande. Un gigante gaseoso con muchas lunas.',
  },
  Saturno: {
    name: 'Saturno',
    description: 'Famoso por sus anillos. También es un gigante gaseoso.',
  },
  Urano: {
    name: 'Urano',
    description: 'Un gigante de hielo. Rota sobre su lado.',
  },
  Neptuno: {
    name: 'Neptuno',
    description: 'El planeta más lejano. Azul intenso por el metano.',
  },
};

export const SolarSystemModule: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(true);

  return (
    <div className="module-container solar-system-module">
      <h1>🌍 Sistema Solar</h1>
      <p>Simulador interactivo del Sistema Solar</p>

      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? '⏸ Pausar' : '▶ Reanudar'}
        </button>
      </div>

      <div className="solar-system">
        <div className="sun">☀️</div>
        {PLANETS.map((planet) => (
          <div
            key={planet.name}
            className={`orbit orbit-${planet.distance}`}
            style={{
              '--orbit-size': `${planet.distance * 2}px`,
              '--animation': isRunning ? 'orbit' : 'none',
            } as React.CSSProperties}
          >
            <div
              className="planet"
              onClick={() => setSelectedPlanet(planet.name)}
              style={{
                background: planet.color,
                width: `${planet.size}px`,
                height: `${planet.size}px`,
              }}
              title={planet.name}
            >
              {planet.name.charAt(0)}
            </div>
          </div>
        ))}
      </div>

      {selectedPlanet && (
        <div className="planet-info">
          <button onClick={() => setSelectedPlanet(null)} className="close-btn">✕</button>
          <h2>{selectedPlanet}</h2>
          <p>{PLANET_INFO[selectedPlanet].description}</p>
        </div>
      )}
    </div>
  );
};
