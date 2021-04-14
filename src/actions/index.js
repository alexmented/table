export const gettingData = (city1, city2, date) => async (dispatch) => {
  const data = {city1: city1, city2: city2, date: date};
  const response = await fetch("http://localhost:3001/testAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json().then((result) => result));
  dispatch({type: "GET_DATA", payload: response});
};

export const pushingData = (city1, city2, date, email) => async (dispatch) => {
  const data = {city1: city1, city2: city2, date: date, email: email};
  await fetch("http://localhost:3001/insertAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) =>
    res.json().then((result) => {
      if (result["error"] === undefined) {
        alert("Данные добавлены");
      } else {
        alert("Ошибка");
      }
      return result;
    })
  );
  dispatch({type: "PUSH_DATA"});
};
