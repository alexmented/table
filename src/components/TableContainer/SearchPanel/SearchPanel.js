import React, { useState } from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import { useStyles } from "./styled"
import { useSearchData } from "../../features/useSearchData"
import { useData } from "../../features/useData"

export const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState("")
  const [isError, setIsError] = useState(false)
  const { sortingElements } = useData()
  const classes = useStyles()
  const { tableData, tableDataRegSearch, tableDataElementsSearch } = useSearchData(
    searchValue
  )

  const onSearchClick = () => {
    setSearchValue("")
    if (tableDataElementsSearch.length) {
      setIsError(false)
      sortingElements(tableDataElementsSearch)
    } else {
      setIsError(true)
    }
  }

  const onSearchRegClick = () => {
    setSearchValue("")
    if (tableDataRegSearch.length) {
      setIsError(false)
      sortingElements(tableDataRegSearch)
    } else {
      setIsError(true)
    }
  }

  return (
    <>
      <h4>Поиск строк по вхождению подстроки</h4>
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
      <Button onClick={() => sortingElements(tableData)} className={classes.button}>
        Показать все
      </Button>
      <p>{isError ? "Ничего не найдено" : ""}</p>
    </>
  )
}
