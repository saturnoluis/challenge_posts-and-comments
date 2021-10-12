import { createSlice } from '@reduxjs/toolkit'
import { setEndLoading, setStartLoading } from './loading';
import { getSingle } from '../../service';

// Slice definition
const slice = createSlice({
  name: 'single',
  initialState: {
    data: {},
    requested: false,
  },
  reducers: {
    setSingle: (state, action) => {
      state.data = action.payload;
      state.requested = true;
    },
    cleanSingle: state => {
      state.data = {};
      state.requested = false;
    },
  },
});

// Selectors
export const selectSingle = state => state.single.data;
export const selectRequested = state => state.single.requested;

// Thunks
export const requestSingle = id => dispatch => {
  dispatch(setStartLoading('single'));
  
  getSingle(id).then((single) => {
    dispatch(setSingle(single));
    dispatch(setEndLoading('single'));
  });
};

// Actions
export const { setSingle, cleanSingle } = slice.actions;

// Reducer
export default slice.reducer;