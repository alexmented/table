import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import { bindActionCreators } from "redux"
import { tableSlice } from "../tableSlice"
import { useStyles } from "./styled"

const initAddValue = {
  name: "",
  surname: "",
  dates: "",
  time: "",
  something: "",
}

export const AdditionPanel = () => {
  const [addValue, setAddValue] = useState(initAddValue)
  const dispatch = useDispatch()
  const classes = useStyles()
  const actions = bindActionCreators(tableSlice.actions, dispatch)
  const tableData = useSelector((state) => state)

  const onAddClick = () => {
    const newId = tableData[tableData.length - 1].id + 1
    const newVal = {
      id: newId,
      name: addValue.name,
      surname: addValue.surname,
      dates: addValue.dates,
      time: addValue.time,
      something: addValue.something,
    }
    setAddValue(initAddValue)
    actions.addData(newVal)
  }

  return (
    <div className={classes.root}>
      {Object.keys(initAddValue).map((el, index) => (
        <Input
          type="text"
          key={el + index}
          placeholder={el}
          className={classes.elements}
          onChange={(e) =>
            setAddValue((state) => ({ ...state, [el]: e.target.value }))
          }
          value={addValue[el]}
        />
      ))}
      <Button color="primary" onClick={onAddClick} className={classes.button}>
        Добавить
      </Button>
    </div>
  )
}
