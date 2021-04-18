import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useStyles } from "./styled";
import { useData } from "../../features/useData";

const initAddValue = {
  name: "",
  surname: "",
  dates: "",
  time: "",
  something: "",
};

export const AdditionPanel = () => {
  const [addValue, setAddValue] = useState(initAddValue);
  const classes = useStyles();
  const { addNewElement, tableData } = useData(addValue);

  const onAddClick = () => {
    const newId = tableData[tableData.length - 1].id + 1;
    const newValue = {
      id: newId,
      name: addValue.name,
      surname: addValue.surname,
      dates: addValue.dates,
      time: addValue.time,
      something: addValue.something,
    };
    setAddValue(initAddValue);
    addNewElement(newValue);
  };

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
  );
};
