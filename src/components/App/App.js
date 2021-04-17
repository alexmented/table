import React from "react"
import { useStyles } from "./styled"
import TableContainer from "../TableContainer/TableContainer"

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <TableContainer />
    </div>
  )
}

export default App
