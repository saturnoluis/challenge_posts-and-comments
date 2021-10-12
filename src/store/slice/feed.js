import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';
import { getFeed } from '../../service';

// Slice definition
const slice = createSlice({
  name: 'feed',
  initialState: {
    data: [],
    requested: false,
  },
  reducers: {
    setFeed: (state, action) => {
      state.data = action.payload;
      state.requested = true;
    },
  },
});

// Selectors
export const selectFeed = state => state.feed.data;
export const selectRequested = state => state.feed.requested;

// Thunks
export const requestFeed = () => dispatch => {
  dispatch(setStartLoading());

  getFeed().then((feed) => {
    dispatch(setFeed(feed));
    dispatch(setEndLoading());
  });
};

// Actions
export const { setFeed } = slice.actions;

// Reducer
export default slice.reducer;