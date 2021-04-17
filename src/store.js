import { createStore } from "redux"
import { tableSlice } from "./components/Table/tableSlice"

const store = createStore(tableSlice.reducer)

export default store
