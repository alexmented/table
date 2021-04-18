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
  const [message, setMessage] = useState("");
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
    const values = Object.values(newValue);
    const isValuesEqual = values.filter((el) => el).length === values.length;
    if (isValuesEqual) {
      setAddValue(initAddValue);
      setMessage("Добавлено");
      addNewElement(newValue);
    }
    setMessage("Заполните все поля");
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
      <p>{message}</p>
    </div>
  );
};
