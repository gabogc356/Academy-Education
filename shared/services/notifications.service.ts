import { messaging } from '../config/firebase.config';
import { getToken, onMessage } from 'firebase/messaging';

export const notificationsService = {
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_MESSAGING_KEY,
        });
        return token;
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  },

  onMessageListener() {
    return new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });
  },

  sendLocalNotification(title: string, options?: NotificationOptions) {
    if ('Notification' in window) {
      new Notification(title, options);
    }
  },
};
