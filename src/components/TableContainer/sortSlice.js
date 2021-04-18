import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortData: (state, action) => action.payload,
  },
})

const { actions, reducer } = sortSlice
export const { sortData } = actions
export default reducer
