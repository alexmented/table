import TableRow from "@material-ui/core/TableRow"
import { columns } from "../constants"
import TableCell from "@material-ui/core/TableCell"
import React, { memo } from "react"
import { areEqual } from "react-window"
import { useStyles } from "./styled"
import { tableSlice } from "../tableSlice"
import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"

export const Row = memo(({ index, style, data: { data } }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const actions = bindActionCreators(tableSlice.actions, dispatch)
  return (
    <TableRow component="div" style={style} className={classes.root}>
      {columns.map((el, ind) => (
        <TableCell
          key={el.label + ind}
          component="div"
          variant="body"
          className={classes.cell}
        >
          {data[index][el.dataKey]}
        </TableCell>
      ))}
      <TableCell component="div" variant="body" className={classes.cell}>
        <button onClick={() => actions.deleteData(data[index].id)}>Удалить</button>
      </TableCell>
    </TableRow>
  )
}, areEqual)
