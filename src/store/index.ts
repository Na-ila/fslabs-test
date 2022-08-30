import { configureStore } from '@reduxjs/toolkit';

import postSlice from './postSlice';

const store = configureStore({
  reducer: {
    postSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
