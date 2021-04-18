import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  addData,
  deleteData,
  changingDataSuccess,
  changingDataFailure,
  changingDataFetch,
} from "../TableContainer/tableSlice";
import { sortData } from "../TableContainer/sortSlice";

export const useData = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state).regularData.dataFetching;
  const loadingData = useSelector((state) => state).regularData.loading;
  const errorData = useSelector((state) => state).regularData.error;
  const sortedData = useSelector((state) => state).sortedData;
  const addNewElement = useCallback((value) => dispatch(addData(value)), [dispatch]);
  const deleteElement = useCallback((value) => dispatch(deleteData(value)), [
    dispatch,
  ]);
  const changingElementsSuccess = useCallback(
    (value) => dispatch(changingDataSuccess(value)),
    [dispatch]
  );
  const changingElementsFailure = useCallback(
    (value) => dispatch(changingDataFailure(value)),
    [dispatch]
  );
  const changingElementsFetch = useCallback(() => dispatch(changingDataFetch()), [
    dispatch,
  ]);
  const sortingElements = useCallback((value) => dispatch(sortData(value)), [
    dispatch,
  ]);

  return {
    addNewElement,
    tableData,
    loadingData,
    errorData,
    deleteElement,
    changingElementsSuccess,
    sortedData,
    sortingElements,
    changingElementsFailure,
    changingElementsFetch,
  };
};
