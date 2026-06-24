import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUserProfile, fetchUserStats } from '../store/slices/user';
import { useAuth } from '../hooks/useAuth';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const { profile, stats } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserProfile(user.uid));
      dispatch(fetchUserStats(user.uid));
    }
  }, [user, dispatch]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Bienvenido, {profile?.name}!</h1>
        <p>Plan actual: <strong>{profile?.plan}</strong></p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <div className="stat-content">
            <h3>Racha</h3>
            <p className="stat-value">{stats?.streak || 0} días</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div className="stat-content">
            <h3>Lecciones</h3>
            <p className="stat-value">{stats?.totalLessons || 0}</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">⏱️</span>
          <div className="stat-content">
            <h3>Minutos</h3>
            <p className="stat-value">{stats?.totalMinutes || 0}</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">❌</span>
          <div className="stat-content">
            <h3>Errores</h3>
            <p className="stat-value">{stats?.errors || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
