import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import { User, UserProfile, UserStats } from '../types/common.types';

export const userService = {
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      return userDoc.exists() ? userDoc.data().profile : null;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  },

  async updateUserProfile(userId: string, profile: Partial<UserProfile>) {
    try {
      await updateDoc(doc(db, 'users', userId), {
        profile: {
          ...profile,
        },
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },

  async getUserStats(userId: string): Promise<UserStats | null> {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      return userDoc.exists() ? userDoc.data().stats : null;
    } catch (error) {
      console.error('Error fetching stats:', error);
      return null;
    }
  },

  async updateStats(userId: string, stats: Partial<UserStats>) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      const currentStats = userDoc.data().stats;

      await updateDoc(doc(db, 'users', userId), {
        stats: {
          ...currentStats,
          ...stats,
        },
      });
    } catch (error) {
      console.error('Error updating stats:', error);
      throw error;
    }
  },

  async incrementStreak(userId: string) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      const currentStats = userDoc.data().stats;

      await updateDoc(doc(db, 'users', userId), {
        'stats.streak': currentStats.streak + 1,
      });
    } catch (error) {
      console.error('Error incrementing streak:', error);
      throw error;
    }
  },

  async addError(userId: string, moduleId: string, errorData: any) {
    try {
      const errorsRef = collection(db, 'errors', userId, 'list');
      await updateDoc(doc(db, 'users', userId), {
        'stats.errors': (await getDoc(doc(db, 'users', userId))).data().stats.errors + 1,
      });
    } catch (error) {
      console.error('Error adding error record:', error);
      throw error;
    }
  },
};
