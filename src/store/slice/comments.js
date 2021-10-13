import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';
import { getComments, postNewComment } from '../../service';

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
    addComment: (state, action) => {
      const { id, postId, name, email, body } = action.payload;
      state.data.push({id, postId, name, email, body});
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

// ThunkspostId
export const requestComments = postId => dispatch => {
  dispatch(setStartLoading('comments'));

  getComments(postId).then(comments => {
    dispatch(setComments(comments));
    dispatch(setEndLoading('comments'));
  });
};

export const submitComment = comment => dispatch => {
  const { postId, name, email, body } = comment;
  dispatch(setStartLoading('comment-submit'));

  postNewComment(postId, name, email, body).then(newComment => {
    dispatch(addComment(newComment));
    dispatch(setEndLoading('comment-submit'))
  }, 2000);
} 

// Actions
export const { setComments, addComment, cleanComments } = slice.actions;

// Reducer
export default slice.reducer;