import { createSlice } from "@reduxjs/toolkit";

const initialState = { dataFetching: [], loading: false, error: null };

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changingDataSuccess: (state, action) => {
      state.dataFetching = action.payload;
      state.loading = false;
      state.error = null;
    },
    changingDataFailure: (state, action) => {
      state.dataFetching = [];
      state.loading = false;
      state.error = action.payload;
    },
    changingDataFetch: (state) => {
      state.dataFetching = [];
      state.loading = true;
      state.error = null;
    },
    addData: (state, action) => {
      state.dataFetching = [...state.dataFetching, action.payload];
      state.loading = false;
      state.error = null;
    },
    deleteData: (state, action) => {
      state.dataFetching = state.dataFetching.filter(
        (el) => el.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
  },
});

const { actions, reducer } = tableSlice;
export const {
  changingDataSuccess,
  addData,
  deleteData,
  changingDataFailure,
  changingDataFetch,
} = actions;
export default reducer;
