import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { toggleDarkMode } from '../../store/slices/ui';
import { RootState, AppDispatch } from '../../store/store';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { darkMode } = useSelector((state: RootState) => state.ui);
  const { profile } = useSelector((state: RootState) => state.user);

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className="header-title">🎓 Academy Education</h1>
      </div>

      <div className="header-right">
        <button
          className="theme-btn"
          onClick={() => dispatch(toggleDarkMode())}
          title={darkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="user-info">
          <span>{profile?.name || 'Usuario'}</span>
          <span className="plan-badge">{profile?.plan}</span>
        </div>

        <button className="icon-btn" title="Configuración">
          <Settings size={20} />
        </button>
        <button className="icon-btn logout" title="Cerrar sesión">
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
};
