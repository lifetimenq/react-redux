import { createSlice } from '@reduxjs/toolkit';

const initialState = 'SHOW_ALL';

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload
    }
  }
})

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

