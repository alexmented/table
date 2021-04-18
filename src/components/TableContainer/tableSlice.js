import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changingData: (state, action) => action.payload,
    addData: (state, action) => [...state, action.payload],
    deleteData: (state, action) => state.filter((el) => el.id !== action.payload),
  },
})

const { actions, reducer } = tableSlice
export const { changingData, addData, deleteData } = actions
export default reducer
