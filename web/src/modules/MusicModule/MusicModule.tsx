import React, { useState, useEffect } from 'react';
import './MusicModule.css';

const NOTES = [
  { key: 'd', note: 'C4', label: 'Do' },
  { key: 'r', note: 'D4', label: 'Re' },
  { key: 'm', note: 'E4', label: 'Mi' },
  { key: 'f', note: 'F4', label: 'Fa' },
  { key: 's', note: 'G4', label: 'Sol' },
  { key: 'l', note: 'A4', label: 'La' },
  { key: 't', note: 'B4', label: 'Si' },
];

export const MusicModule: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [notes, setNotes] = useState<string[]>([]);
  const audioContextRef = React.useRef<AudioContext | null>(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

    const handleKeyDown = (e: KeyboardEvent) => {
      const note = NOTES.find((n) => n.key.toLowerCase() === e.key.toLowerCase());
      if (note && audioContextRef.current) {
        playNoteAudio(note.note);
        if (recording) setNotes((prev) => [...prev, note.label]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [recording]);

  const playNoteAudio = (frequency: string) => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Map note names to frequencies
    const frequencies: Record<string, number> = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392,
      A4: 440,
      B4: 493.88,
    };

    osc.frequency.value = frequencies[frequency] || 440;
    osc.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  };

  const playNote = (note: string) => {
    playNoteAudio(note);
    if (recording) setNotes((prev) => [...prev, NOTES.find((n) => n.note === note)?.label || '']);
  };

  return (
    <div className="module-container music-module">
      <h1>🎵 Música</h1>
      <p>Juego interactivo de música con teclas: D, R, M, F, S, L, T</p>

      <div className="notes-grid">
        {NOTES.map((note) => (
          <button
            key={note.key}
            className="note-btn"
            onClick={() => playNote(note.note)}
            title={`${note.label} (${note.key})`}
          >
            <span className="note-label">{note.label}</span>
            <span className="note-key">{note.key.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <div className="recording-section">
        <button
          className={`record-btn ${recording ? 'active' : ''}`}
          onClick={() => {
            setRecording(!recording);
            if (!recording) setNotes([]);
          }}
        >
          {recording ? '⏹ Detener Grabación' : '⏺ Grabar'}
        </button>
      </div>

      {notes.length > 0 && (
        <div className="notes-display">
          <h3>Notas Grabadas:</h3>
          <p>{notes.join(' ')}</p>
          <button onClick={() => setNotes([])}>Limpiar</button>
        </div>
      )}
    </div>
  );
};
