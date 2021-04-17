import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changingData: (state, action) => action.payload,
    addData: (state, action) => [...state, action.payload],
    deleteData: (state, action) => state.filter((el) => el.id !== action.payload),
  },
})
