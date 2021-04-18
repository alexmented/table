import tableSlice from "../components/TableContainer/tableSlice";
import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "../components/TableContainer/sortSlice";

const store = configureStore({
  reducer: {
    regularData: tableSlice,
    sortedData: sortSlice,
  },
});

export default store;
