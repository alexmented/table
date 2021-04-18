import React, { useEffect } from "react"
import { columns } from "./constants"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { TableStructure } from "./TableStructure/TableStructure"
import { useStyles } from "./styled"
import { SearchPanel } from "./SearchPanel/SearchPanel"
import { AdditionPanel } from "./AdditionPanel/AdditionPanel"
import { useData } from "../features/useData"

const TableContainer = () => {
  const { tableData, changingElements, sortedData, sortingElements } = useData()
  const classes = useStyles()

  useEffect(async () => {
    await fetch("jj.json")
      .then((res) => res.json())
      .then((result) => changingElements(result))
  }, [])

  const onSortClick = (index, isSorted) => {
    const mas = sortedData.length ? [...sortedData] : [...tableData]
    !isSorted
      ? sortingElements(mas.sort((a, b) => a[index] > b[index]))
      : sortingElements([])
  }

  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Paper className={classes.paper}>
          <TableStructure
            data={sortedData.length ? sortedData : tableData}
            onSortClick={onSortClick}
            columns={columns}
          />
        </Paper>
        <AdditionPanel />
        <SearchPanel />
      </Container>
    </div>
  )
}

export default TableContainer
