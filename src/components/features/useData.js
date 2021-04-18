import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { addData, deleteData, changingData } from "../TableContainer/tableSlice"
import { sortData } from "../TableContainer/sortSlice"

export const useData = () => {
  const dispatch = useDispatch()
  const tableData = useSelector((state) => state).regularData
  const sortedData = useSelector((state) => state).sortedData
  const addNewElement = useCallback((value) => dispatch(addData(value)), [dispatch])
  const deleteElement = useCallback((value) => dispatch(deleteData(value)), [
    dispatch,
  ])
  const changingElements = useCallback((value) => dispatch(changingData(value)), [
    dispatch,
  ])
  const sortingElements = useCallback((value) => dispatch(sortData(value)), [
    dispatch,
  ])

  return {
    addNewElement,
    tableData,
    deleteElement,
    changingElements,
    sortedData,
    sortingElements,
  }
}