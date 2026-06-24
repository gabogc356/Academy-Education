import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';
import modulesReducer from './slices/modules';
import uiReducer from './slices/ui';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    modules: modulesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
