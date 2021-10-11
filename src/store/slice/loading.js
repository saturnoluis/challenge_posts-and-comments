import { createSlice } from '@reduxjs/toolkit'

// Slice definition
const slice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setStartLoading: state => true,
    setEndLoading: state => false,
  },
});

// Selectors
export const selectLoading = state => state.loading;

// Actions
export const { setStartLoading, setEndLoading } = slice.actions;

// Reducer
export default slice.reducer;