import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slice/loading';
import feedReducer from './slice/feed';
import singleReducer from './slice/single';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    feed: feedReducer,
    single: singleReducer,
  },
});
