import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, setLanguage } from '../../store/slices/ui';
import { AppDispatch, RootState } from '../../store/store';
import './SettingsPage.css';

export const SettingsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { darkMode, language, notifications } = useSelector((state: RootState) => state.ui);
  const { profile } = useSelector((state: RootState) => state.user);

  return (
    <div className="module-container settings-page">
      <h1>⚙️ Configuración</h1>

      <div className="settings-section">
        <h2>🎨 Apariencia</h2>
        <div className="setting-item">
          <div className="setting-label">
            <span>Modo Oscuro</span>
            <p>Activa el modo oscuro para mejor confort visual</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => dispatch(toggleDarkMode())}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>🌍 Idioma</h2>
        <div className="setting-item">
          <div className="setting-label">
            <span>Selecciona tu idioma</span>
          </div>
          <select
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="language-select"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>📋 Plan Actual</h2>
        <div className="plan-card">
          <h3>{profile?.plan}</h3>
          <p>Estás disfrutando de todas las características de este plan.</p>
          <button className="btn-upgrade">💎 Mejorar Plan</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>🔐 Privacidad y Seguridad</h2>
        <div className="setting-item">
          <div className="setting-label">
            <span>Datos de Cuenta</span>
            <p>Email: {profile?.email}</p>
          </div>
        </div>
        <div className="setting-item">
          <button className="btn-logout">🚪 Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};
