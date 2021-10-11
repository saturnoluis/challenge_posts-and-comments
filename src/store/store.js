import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './slice/feed';

export default configureStore({
  reducer: {
    feed: feedReducer,
  },
});
