import React, { useEffect } from "react";
import { columns } from "./constants";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { TableStructure } from "./TableStructure/TableStructure";
import { useStyles } from "./styled";
import { SearchPanel } from "./SearchPanel/SearchPanel";
import { AdditionPanel } from "./AdditionPanel/AdditionPanel";
import { useData } from "../features/useData";

const TableContainer = () => {
  const {
    tableData,
    changingElementsSuccess,
    loadingData,
    errorData,
    sortedData,
    sortingElements,
    changingElementsFetch,
    changingElementsFailure,
  } = useData();
  const classes = useStyles();

  useEffect(async () => {
    await fetch("bigdata.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        changingElementsFetch();
        return res.json();
      })
      .then((result) => {
        changingElementsSuccess(result);
      })
      .catch(() => changingElementsFailure("Ошибка, попробуйте позже"));
  }, []);

  const onSortClick = (index, isSorted) => {
    const mas = sortedData.length ? [...sortedData] : [...tableData];
    !isSorted
      ? sortingElements(mas.sort((a, b) => a[index] > b[index]))
      : sortingElements([]);
  };

  return (
    <div className={classes.root}>
      <Container fixed maxWidth={"sm"} className={classes.container}>
        {errorData ? (
          <div className={classes.error}>{errorData}</div>
        ) : (
          <>
            <Paper className={classes.paper}>
              {loadingData ? (
                <div>Loading</div>
              ) : (
                <TableStructure
                  data={sortedData.length ? sortedData : tableData}
                  onSortClick={onSortClick}
                  columns={columns}
                />
              )}
            </Paper>
            <AdditionPanel />
            <SearchPanel />
          </>
        )}
      </Container>
    </div>
  );
};

export default TableContainer;
