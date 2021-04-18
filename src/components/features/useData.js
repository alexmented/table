import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { addData, deleteData, changingData } from "../TableContainer/tableSlice"

export const useData = () => {
  const dispatch = useDispatch()
  const tableData = useSelector((state) => state)
  const addNewElement = useCallback((value) => dispatch(addData(value)), [dispatch])
  const deleteElement = useCallback((value) => dispatch(deleteData(value)), [
    dispatch,
  ])
  const changingElements = useCallback((value) => dispatch(changingData(value)), [
    dispatch,
  ])

  return { addNewElement, tableData, deleteElement, changingElements }
}
