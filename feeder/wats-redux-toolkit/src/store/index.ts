import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
