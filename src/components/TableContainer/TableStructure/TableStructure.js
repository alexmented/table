import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import AutoSizer from "react-virtualized-auto-sizer"
import { FixedSizeList as List } from "react-window"
import React from "react"
import { ROW_SIZE } from "../constants"
import { Row } from "../Row/Row"
import { TableColumns } from "../TableColumns/TableColumns"
import { useTableStyles } from "./styled"

export const TableStructure = ({ data, columns, onSortClick }) => {
  const classes = useTableStyles()
  const itemKey = (index, { data }) => data[index].name
  return (
    <div className={classes.root}>
      <Table className={classes.table} component="div">
        <TableHead component="div">
          <TableColumns
            classes={classes}
            columns={columns}
            onSortClick={onSortClick}
          />
        </TableHead>

        <TableBody component="div" className={classes.tbody}>
          <AutoSizer>
            {({ height }) => (
              <List
                height={height}
                width={912}
                itemCount={data.length}
                itemSize={ROW_SIZE}
                itemKey={itemKey}
                itemData={{ data }}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        </TableBody>
      </Table>
    </div>
  )
}
