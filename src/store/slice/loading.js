import { createSlice } from '@reduxjs/toolkit'

// Slice definition
const slice = createSlice({
  name: 'loading',
  initialState: {},
  reducers: {
    setStartLoading: (state, action) => {
      state[action.payload] = true;
    },
    setEndLoading: (state, action) => {
      state[action.payload] = false;
    },
  },
});

// Selectors
export const selectLoading = id => state => state.loading[id];

// Actions
export const { setStartLoading, setEndLoading } = slice.actions;

// Reducer
export default slice.reducer;