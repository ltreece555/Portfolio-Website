export const setScrollHeight = (n) => {
  return {
    type: "SET_SCROLL_HEIGHT",
    payload: n,
  };
};
export const incrementScrollHeight = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementScrollHeight = () => {
  return {
    type: "DECREMENT",
  };
};
export const startUpTrue = () => {
  return {
    type: "STARTUP_TRUE",
  };
};
export const startUpFalse = () => {
  return {
    type: "STARTUP_FALSE",
  };
};
export const startUpToggle = () => {
  return {
    type: "STARTUP_TOGGLE",
  };
};
export const colorPallete = (n) => {
  return {
    type: "COLOR",
    payload: n,
  };
};
export const setMobile = (n) => {
  return {
    type: "MOBILE",
    payload: n,
  };
};
