import React, { useState } from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import { useStyles } from "./styled"
import { createSelector } from "reselect"
import { useSelector } from "react-redux"

export const SearchPanel = ({ setIsFiltered }) => {
  const [searchValue, setSearchValue] = useState("")
  const classes = useStyles()
  const tableData = useSelector((state) => state)
  const elementsSearch = createSelector(
    (state) => state,
    (elements) =>
      elements.filter(
        (el) =>
          Object.values(el).filter((v) => v.toString().includes(searchValue)).length
      )
  )

  const tableDataElementsSearch = useSelector(elementsSearch)

  const reSearch = createSelector(
    (state) => state,
    (elements) => {
      const re = new RegExp(searchValue)
      return elements.filter(
        (el) => Object.values(el).filter((v) => re.test(v.toString())).length
      )
    }
  )

  const tableDataRegSearch = useSelector(reSearch)

  const onSearchClick = () => {
    setSearchValue("")
    setIsFiltered(tableDataElementsSearch)
  }

  const onSearchRegClick = () => {
    setSearchValue("")
    setIsFiltered(tableDataRegSearch)
  }

  return (
    <>
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
      <Button onClick={() => setIsFiltered(tableData)} className={classes.button}>
        Показать все
      </Button>
    </>
  )
}
