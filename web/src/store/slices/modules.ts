import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  lastAccessed: string;
  progress: number;
}

interface ModulesState {
  activeModule: string | null;
  progress: Record<string, ModuleProgress>;
  isLoading: boolean;
}

const initialState: ModulesState = {
  activeModule: null,
  progress: {},
  isLoading: false,
};

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setActiveModule: (state, action: PayloadAction<string>) => {
      state.activeModule = action.payload;
    },
    updateModuleProgress: (state, action: PayloadAction<ModuleProgress>) => {
      state.progress[action.payload.moduleId] = action.payload;
    },
    setModuleProgress: (state, action: PayloadAction<Record<string, ModuleProgress>>) => {
      state.progress = action.payload;
    },
  },
});

export const { setActiveModule, updateModuleProgress, setModuleProgress } = modulesSlice.actions;
export default modulesSlice.reducer;
