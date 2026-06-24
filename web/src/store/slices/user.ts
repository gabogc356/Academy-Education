import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../services/index';
import { UserProfile, UserStats, PlanType } from '../../types/index';

interface UserState {
  profile: UserProfile | null;
  stats: UserStats | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  stats: null,
  isLoading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (userId: string) => {
  return await userService.getUserProfile(userId);
});

export const fetchUserStats = createAsyncThunk('user/fetchStats', async (userId: string) => {
  return await userService.getUserStats(userId);
});

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ userId, profile }: { userId: string; profile: Partial<UserProfile> }) => {
    await userService.updateUserProfile(userId, profile);
    return profile;
  }
);

export const updatePlan = createAsyncThunk(
  'user/updatePlan',
  async ({ userId, plan }: { userId: string; plan: PlanType }) => {
    await userService.updateUserProfile(userId, { plan });
    return plan;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.profile = null;
      state.stats = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error loading profile';
      })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile = { ...state.profile, ...action.payload };
        }
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.plan = action.payload;
        }
      });
  },
});

export const { clearUserData } = userSlice.actions;
export default userSlice.reducer;
