import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import { bindActionCreators } from "redux"
import { tableSlice } from "../Table/tableSlice"
import { useStyles } from "./styled"
import Tablex from "../Table/Table"

const initAddValue = {
  name: "",
  surname: "",
  dates: "",
  time: "",
  something: "",
}

function App() {
  const classes = useStyles()

  const [addValue, setAddValue] = useState(initAddValue)
  const dispatch = useDispatch()
  const actions = bindActionCreators(tableSlice.actions, dispatch)
  const counter = useSelector((state) => state)

  const onAddClick = () => {
    const newId = counter[counter.length - 1].id + 1
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
    <div className={classes.app}>
      {Object.keys(initAddValue).map((el, index) => (
        <Input
          type="text"
          key={el + index}
          placeholder={el}
          onChange={(e) =>
            setAddValue((state) => ({ ...state, [el]: e.target.value }))
          }
          value={addValue[el]}
        />
      ))}
      <Button color="primary" onClick={onAddClick}>
        Add
      </Button>
      <Tablex />
    </div>
  )
}

export default App
