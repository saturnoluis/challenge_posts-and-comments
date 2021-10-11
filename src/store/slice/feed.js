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
    loading: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    toggleLoading: state => {
      state.loading = !state.loading;
    }
  },
});

// Selectors
export const selectPosts = state => state.feed.posts;
export const selectLoading = state => state.feed.loading;

// Thunks
export const fetchPosts = () => dispatch => {
  dispatch(toggleLoading());

  setTimeout(() => {
    dispatch(setPosts(dummyPosts));
    dispatch(toggleLoading());
  }, 2000);
};

// Actions
export const { setPosts, toggleLoading } = slice.actions;

// Reducer
export default slice.reducer;