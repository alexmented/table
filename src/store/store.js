import { createStore } from "redux"
import { tableSlice } from "../components/TableContainer/tableSlice"

const store = createStore(tableSlice.reducer)

export default store
