import TableRow from "@material-ui/core/TableRow"
import { columns, ROW_SIZE } from "../constants"
import TableCell from "@material-ui/core/TableCell"
import React, { memo } from "react"
import { areEqual } from "react-window"
import { useStyles } from "./styled"
import { tableSlice } from "../tableSlice"
import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"

export const Row = memo(({ index, data: { data } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const actions = bindActionCreators(tableSlice.actions, dispatch)
  return (
    <TableRow component="div" className={classes.root}>
      {columns.map((el, ind) => (
        <TableCell
          key={el.label + ind}
          component="div"
          variant="body"
          style={{
            height: ROW_SIZE,
          }}
        >
          {data[index][el.dataKey]}
        </TableCell>
      ))}
      <TableCell
        component="div"
        variant="body"
        style={{
          height: ROW_SIZE,
        }}
      >
        <button onClick={() => actions.deleteData(data[index].id)}>Удалить</button>
      </TableCell>
    </TableRow>
  )
}, areEqual)
