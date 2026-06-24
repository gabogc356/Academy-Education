import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../services/index';
import { setUser } from '../store/slices/auth';
import { RootState, AppDispatch } from '../store/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        // Aquí podrías cargar los datos del usuario desde Firestore
        dispatch(setUser(firebaseUser as any));
      } else {
        dispatch(setUser(null));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { user, isAuthenticated, loading };
};
