import React, { useEffect, useState } from "react"
import { columns } from "./constants"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { useDispatch, useSelector } from "react-redux"
import { TableStructure } from "./TableStructure/TableStructure"
import { tableSlice } from "./tableSlice"
import { useStyles } from "./styled"
import { bindActionCreators } from "redux"
import { SearchPanel } from "./SearchPanel/SearchPanel"
import { AdditionPanel } from "./AdditionPanel/AdditionPanel"

const TableContainer = () => {
  const tableData = useSelector((state) => state)
  const classes = useStyles()
  const [isFiltered, setIsFiltered] = useState([])
  const dispatch = useDispatch()
  const actions = bindActionCreators(tableSlice.actions, dispatch)

  useEffect(async () => {
    await fetch("j.json")
      .then((res) => res.json())
      .then((result) => actions.changingData(result))
  }, [])

  const onSortClick = (index, isSorted) => {
    const mas = isFiltered.length ? isFiltered : [...tableData]
    !isSorted
      ? setIsFiltered(mas.sort((a, b) => a[index] > b[index]))
      : setIsFiltered([])
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <TableStructure
            data={isFiltered.length ? isFiltered : tableData}
            onSortClick={onSortClick}
            columns={columns}
          />
        </Paper>
        <AdditionPanel />
        <SearchPanel setIsFiltered={setIsFiltered} />
      </Container>
    </div>
  )
}

export default TableContainer
