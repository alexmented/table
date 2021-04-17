import React, { useState } from "react"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { ROW_SIZE } from "../constants"

export const TableColumns = ({ columns, onSortClick }) => {
  const [isSorted, setIsSorted] = useState(false)
  const handleClick = (dataKey) => {
    onSortClick(dataKey, isSorted)
    setIsSorted(!isSorted)
  }
  return (
    <TableRow component="div">
      {columns.map((column, colIndex) => {
        return (
          <TableCell
            key={colIndex}
            component="div"
            variant="head"
            style={{
              height: ROW_SIZE,
            }}
            scope="col"
            onClick={() => handleClick(column.dataKey)}
          >
            {column.label}
          </TableCell>
        )
      })}
      <TableCell
        component="div"
        variant="head"
        style={{
          height: ROW_SIZE,
        }}
        scope="col"
      >
        Удалить
      </TableCell>
    </TableRow>
  )
}
