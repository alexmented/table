import TableRow from "@material-ui/core/TableRow";
import { columns } from "../constants";
import TableCell from "@material-ui/core/TableCell";
import React, { memo } from "react";
import { areEqual } from "react-window";
import { useStyles } from "./styled";
import Button from "@material-ui/core/Button";
import { useData } from "../../features/useData";

export const Row = memo(({ index, style, data: { data } }) => {
  const classes = useStyles();
  const { deleteElement } = useData();
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
        <Button
          className={classes.button}
          onClick={() => deleteElement(data[index].id)}
        >
          Удалить
        </Button>
      </TableCell>
    </TableRow>
  );
}, areEqual);
