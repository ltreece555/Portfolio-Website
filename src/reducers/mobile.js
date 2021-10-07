const mobileReducer = (state = false, action) => {
  switch (action.type) {
    case "MOBILE_TRUE":
      return (state = true);
    case "MOBILE_FALSE":
      return (state = false);
    case "MOBILE_TOGGLE":
      return (state = !state);
    default:
      return state;
  }
};

export default mobileReducer;
