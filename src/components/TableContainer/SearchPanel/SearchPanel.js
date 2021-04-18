import React, { useState } from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import { useStyles } from "./styled"
import { useSearchData } from "../../features/useSearchData"

export const SearchPanel = ({ setIsFiltered }) => {
  const [searchValue, setSearchValue] = useState("")
  const [isError, setIsError] = useState(false)
  const classes = useStyles()
  const { tableData, tableDataRegSearch, tableDataElementsSearch } = useSearchData(
    searchValue
  )

  const onSearchClick = () => {
    setSearchValue("")
    if (tableDataElementsSearch.length) {
      setIsError(false)
      setIsFiltered(tableDataElementsSearch)
    } else {
      setIsError(true)
    }
  }

  const onSearchRegClick = () => {
    setSearchValue("")
    if (tableDataRegSearch.length) {
      setIsError(false)
      setIsFiltered(tableDataRegSearch)
    } else {
      setIsError(true)
    }
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
      <p>{isError ? "Ничего не найдено" : ""}</p>
    </>
  )
}
