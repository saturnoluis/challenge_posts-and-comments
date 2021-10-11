import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';

const dummyPosts = [
  { id: 1, title: 'First title', body: 'First body' },
  { id: 2, title: 'Second title', body: 'Second body from redux' },
];

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

  setTimeout(() => {
    dispatch(setFeed(dummyPosts));
    dispatch(setEndLoading());
  }, 2000);
};

// Actions
export const { setFeed } = slice.actions;

// Reducer
export default slice.reducer;