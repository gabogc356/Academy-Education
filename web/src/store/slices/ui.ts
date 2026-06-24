import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  sidebarOpen: boolean;
  language: string;
  notifications: boolean;
}

const initialState: UIState = {
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  sidebarOpen: true,
  language: localStorage.getItem('language') || 'es',
  notifications: localStorage.getItem('notifications') !== 'false',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', String(state.darkMode));
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
      localStorage.setItem('notifications', String(state.notifications));
    },
  },
});

export const { toggleDarkMode, toggleSidebar, setLanguage, toggleNotifications } = uiSlice.actions;
export default uiSlice.reducer;
