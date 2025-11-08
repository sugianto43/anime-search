import { configureStore, isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { message } from 'antd';
import { animeApi } from './api/animeApi';

// ✅ Correctly typed Redux middleware
const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = action.payload as any;
    const status = err?.status || 'unknown';
    const msg = err?.data?.message || err?.error || `Request failed with status ${status}`;
    message.error(msg);
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware).concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
