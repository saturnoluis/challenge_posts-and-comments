import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';
import { getComments } from '../../service';

// Slice definition
const slice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    requested: false,
  },
  reducers: {
    setComments: (state, action) => {
      state.data = action.payload;
      state.requested = true;
    },
    cleanComments: state => {
      state.data = [];
      state.requested = false;
    },
  },
});

// Selectors
export const selectComments = state => state.comments.data;
export const selectRequested = state => state.comments.requested;

// Thunks
export const requestComments = postId => dispatch => {
  dispatch(setStartLoading('comments'));

  getComments(postId).then(comments => {
    dispatch(setComments(comments));
    dispatch(setEndLoading('comments'));
  });
};

// Actions
export const { setComments, cleanComments } = slice.actions;

// Reducer
export default slice.reducer;