import React, { useEffect, useState } from "react"
import { columns } from "./constants"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { TableStructure } from "./TableStructure/TableStructure"
import { useStyles } from "./styled"
import { SearchPanel } from "./SearchPanel/SearchPanel"
import { AdditionPanel } from "./AdditionPanel/AdditionPanel"
import { useData } from "../features/useData"

const TableContainer = () => {
  const { tableData, changingElements } = useData()
  const classes = useStyles()
  const [isFiltered, setIsFiltered] = useState([])

  useEffect(async () => {
    await fetch("jj.json")
      .then((res) => res.json())
      .then((result) => changingElements(result))
  }, [])

  const onSortClick = (index, isSorted) => {
    const mas = isFiltered.length ? isFiltered : [...tableData]
    !isSorted
      ? setIsFiltered(mas.sort((a, b) => a[index] > b[index]))
      : setIsFiltered([])
  }

  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
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
