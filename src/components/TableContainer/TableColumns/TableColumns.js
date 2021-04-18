import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useStyles } from "./styled";

export const TableColumns = ({ columns, onSortClick }) => {
  const [isSorted, setIsSorted] = useState(false);
  const classes = useStyles();
  const handleClick = (dataKey) => {
    onSortClick(dataKey, isSorted);
    setIsSorted(!isSorted);
  };
  return (
    <TableRow component="div">
      {columns.map((column, colIndex) => {
        return (
          <TableCell
            key={colIndex}
            component="div"
            variant="head"
            className={classes.cell}
            scope="col"
            onClick={() => handleClick(column.dataKey)}
          >
            {column.label}
          </TableCell>
        );
      })}
      <TableCell component="div" variant="head" className={classes.cell} scope="col">
        Удалить
      </TableCell>
    </TableRow>
  );
};
