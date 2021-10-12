import { configureStore } from '@reduxjs/toolkit';
import loading from './slice/loading';
import feed from './slice/feed';
import single from './slice/single';
import comments from './slice/comments';

export default configureStore({
  reducer: {
    loading,
    feed,
    single,
    comments,
  },
});
