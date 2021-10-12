import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';

const dummyComments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi es…am sapiente accusantium",
  },
];

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
  },
});

// Selectors
export const selectComments = state => state.comments.data;
export const selectRequested = state => state.comments.requested;

// Thunks
export const requestComments = postId => dispatch => {
  dispatch(setStartLoading());

  setTimeout(() => {
    dispatch(setComments(dummyComments));
    dispatch(setEndLoading());
  }, 2000);
};

// Actions
export const { setComments } = slice.actions;

// Reducer
export default slice.reducer;