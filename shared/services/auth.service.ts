import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase.config';
import { UserProfile } from '../types/common.types';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const authService = {
  async register(email: string, password: string, name: string) {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      const userProfile: UserProfile = {
        name,
        email,
        language: 'es',
        darkMode: false,
        plan: 'free',
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'users', user.uid), {
        profile: userProfile,
        stats: {
          streak: 0,
          totalLessons: 0,
          totalMinutes: 0,
          errors: 0,
        },
        settings: {
          notifications: true,
          email: true,
        },
      });

      return { user, profile: userProfile };
    } catch (error: any) {
      throw new Error(error.message || 'Error en el registro');
    }
  },

  async login(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      throw new Error(error.message || 'Error en el login');
    }
  },

  async loginWithGoogle() {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (!userDoc.exists()) {
        const userProfile: UserProfile = {
          name: user.displayName || 'Usuario',
          email: user.email || '',
          language: 'es',
          darkMode: false,
          plan: 'free',
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, 'users', user.uid), {
          profile: userProfile,
          stats: {
            streak: 0,
            totalLessons: 0,
            totalMinutes: 0,
            errors: 0,
          },
          settings: {
            notifications: true,
            email: true,
          },
        });
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message || 'Error en login con Google');
    }
  },

  async loginWithGithub() {
    try {
      const { user } = await signInWithPopup(auth, githubProvider);
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (!userDoc.exists()) {
        const userProfile: UserProfile = {
          name: user.displayName || 'Usuario',
          email: user.email || '',
          language: 'es',
          darkMode: false,
          plan: 'free',
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, 'users', user.uid), {
          profile: userProfile,
          stats: {
            streak: 0,
            totalLessons: 0,
            totalMinutes: 0,
            errors: 0,
          },
          settings: {
            notifications: true,
            email: true,
          },
        });
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message || 'Error en login con GitHub');
    }
  },

  async logout() {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message || 'Error en logout');
    }
  },

  onAuthStateChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  getCurrentUser() {
    return auth.currentUser;
  },
};
