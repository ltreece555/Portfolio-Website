// change "state" to true for startup animation
const startUpReducer = (state = true, action) => {
  switch (action.type) {
    case "STARTUP_TRUE":
      return (state = true);
    case "STARTUP_FALSE":
      return (state = false);
    case "STARTUP_TOGGLE":
      return (state = !state);
    default:
      return state;
  }
};

export default startUpReducer;
