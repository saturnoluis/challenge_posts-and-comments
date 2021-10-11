import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';

const dummySingle = { userId: 13, title: 'Dummy title', body: 'Dummy body lorem ipsum' };

// Slice definition
const slice = createSlice({
  name: 'single',
  initialState: {
    data: {
      id: null,
      userId: null,
      title: '',
      body: '',
    },
    requested: false,
  },
  reducers: {
    setSingle: (state, action) => {
      state.data = action.payload;
      state.requested = true
    },
  },
});

// Selectors
export const selectSingle = state => state.single.data;
export const selectRequested = state => state.single.requested;

// Thunks
export const requestSingle = id => dispatch => {
  dispatch(setStartLoading());

  setTimeout(() => {
    dispatch(setSingle({ id, ...dummySingle, }));
    dispatch(setEndLoading());
  }, 2000);
};

// Actions
export const { setSingle } = slice.actions;

// Reducer
export default slice.reducer;