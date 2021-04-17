import React, { useEffect, useState } from "react"
import { columns } from "./constants"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { useDispatch, useSelector } from "react-redux"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import { TableStructure } from "./TableStructure/TableStructure"
import { tableSlice } from "./tableSlice"
import { useStyles } from "./styled"
import { bindActionCreators } from "redux"
import { createSelector } from "reselect"

const Tablex = () => {
  const counter = useSelector((state) => state)
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState("")
  const [isFiltered, setIsFiltered] = useState([])
  const dispatch = useDispatch()
  const actions = bindActionCreators(tableSlice.actions, dispatch)

  useEffect(async () => {
    await fetch("jj.json")
      .then((res) => res.json())
      .then((result) => actions.changingData(result))
  }, [])

  const usualSearch = createSelector(
    (state) => state,
    (elements) =>
      elements.filter(
        (el) =>
          Object.values(el).filter((v) => v.toString().includes(searchValue)).length
      )
  )

  const counter1 = useSelector(usualSearch)

  const reSearch = createSelector(
    (state) => state,
    (elements) => {
      const re = new RegExp(searchValue)
      return elements.filter(
        (el) => Object.values(el).filter((v) => re.test(v.toString())).length
      )
    }
  )

  const counter2 = useSelector(reSearch)

  const onSearchClick = () => {
    setSearchValue("")
    setIsFiltered(counter1)
  }

  const onSearchRegClick = () => {
    setSearchValue("")
    setIsFiltered(counter2)
  }

  const onSortClick = (index, isSorted) => {
    const mas = isFiltered.length ? isFiltered : [...counter]
    !isSorted
      ? setIsFiltered(mas.sort((a, b) => a[index] > b[index]))
      : setIsFiltered([])
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <TableStructure
            data={isFiltered.length ? isFiltered : counter}
            onSortClick={onSortClick}
            columns={columns}
          />
        </Paper>
        <Input
          placeholder="Поиск"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button onClick={onSearchClick} className={classes.button}>
          Поиск
        </Button>
        <Button onClick={onSearchRegClick} className={classes.button}>
          Поиск по регулярному
        </Button>
        <Button onClick={() => setIsFiltered(counter)} className={classes.button}>
          Показать все
        </Button>
      </Container>
    </div>
  )
}

export default Tablex
