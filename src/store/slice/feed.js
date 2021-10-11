import { createSlice } from '@reduxjs/toolkit'

const dummyPosts = [
  { id: 1, title: 'First title', body: 'First body' },
  { id: 2, title: 'Second title', body: 'Second body from redux' },
];

// Slice definition
const slice = createSlice({
  name: 'feed',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// Selectors
export const selectPosts = state => state.feed.posts;

// Thunks
export const fetchPosts = () => dispatch => {
  setTimeout(() => {
    dispatch(setPosts(dummyPosts));
  }, 2000);
};

// Actions
export const { setPosts } = slice.actions;

// Reducer
export default slice.reducer;