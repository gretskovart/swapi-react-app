import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type ReduxStateType = ReturnType<typeof rootReducer>;

export type AppThunkType<T = any> = ThunkAction<
  Promise<T>,
  ReduxStateType,
  unknown,
  Action<string>
>;
