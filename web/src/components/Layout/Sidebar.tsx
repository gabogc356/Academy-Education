import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Globe, Chess, Calculator, Music, History, BookMarked, PlusCircle, Microscope, MessageSquare, Clock, Camera, Settings as SettingsIcon, Database, Flame, BarChart3 } from 'lucide-react';
import { RootState } from '../../store/store';
import './Sidebar.css';

const MODULES = [
  { id: 'home', label: 'Inicio', icon: Home, path: '/' },
  { id: 'books', label: 'Libros con IA', icon: BookOpen, path: '/modules/books' },
  { id: 'solar', label: 'Sistema Solar', icon: Globe, path: '/modules/solar' },
  { id: 'languages', label: 'Idiomas', icon: Globe, path: '/modules/languages' },
  { id: 'chess', label: 'Ajedrez', icon: Chess, path: '/modules/chess' },
  { id: 'math', label: 'Matemáticas', icon: Calculator, path: '/modules/math' },
  { id: 'music', label: 'Música', icon: Music, path: '/modules/music' },
  { id: 'history', label: 'Historia', icon: History, path: '/modules/history' },
  { id: 'language', label: 'Lenguaje', icon: BookMarked, path: '/modules/language' },
  { id: 'algebra', label: 'Álgebra', icon: PlusCircle, path: '/modules/algebra' },
  { id: 'science', label: 'Ciencias', icon: Microscope, path: '/modules/science' },
  { id: 'chatgpt', label: 'ChatGPT', icon: MessageSquare, path: '/modules/chatgpt' },
  { id: 'reminders', label: 'Recordatorios', icon: Clock, path: '/modules/reminders' },
  { id: 'camera', label: 'Cámara', icon: Camera, path: '/modules/camera' },
  { id: 'drive', label: 'Drive (5TB)', icon: Database, path: '/modules/drive' },
  { id: 'streak', label: 'Racha', icon: Flame, path: '/modules/streak' },
  { id: 'errors', label: 'Repaso Errores', icon: BarChart3, path: '/modules/errors' },
  { id: 'settings', label: 'Configuración', icon: SettingsIcon, path: '/settings' },
];

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { darkMode } = useSelector((state: RootState) => state.ui);
  const { plan } = useSelector((state: RootState) => state.user.profile) || { plan: 'free' };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'} ${darkMode ? 'dark' : 'light'}`}>
      <nav className="sidebar-nav">
        {MODULES.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.id}
              to={module.path}
              className="sidebar-item"
              title={module.label}
            >
              <Icon size={20} />
              <span>{module.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
