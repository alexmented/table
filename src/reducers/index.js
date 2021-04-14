const initState = [];
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    case "PUSH_DATA":
      return state;
    default:
      return state;
  }
};

export default reducer;
