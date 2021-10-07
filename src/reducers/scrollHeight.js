const scrollHeightReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_SCROLL_HEIGHT":
      return action.payload;
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default scrollHeightReducer;
