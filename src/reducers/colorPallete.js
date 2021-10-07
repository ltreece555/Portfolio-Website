const colorPalleteReducer = (state, action) => {
  console.log(action);
  switch (action.payload) {
    case "1":
      return (state = {
        primary: "#412691",
        secondary: "#1F1245",
        accent: "#5733C4",
        mutedDark: "#2E2745",
        mutedLight: "#EEEBF7",
      });
    case "2":
      return (state = {
        primary: "#AB0F36",
        secondary: "#5E081E",
        accent: "#DE1446",
        mutedDark: "#5E2533",
        mutedLight: "#F7E6EA",
      });
    case "3":
      return (state = {
        primary: "#00AD5F",
        secondary: "#005E34",
        accent: "#00DE7A",
        mutedDark: "#1C5E41",
        mutedLight: "#E6F7F0",
      });
    default:
      return (state = {
        primary: "#412691",
        secondary: "#1F1245",
        accent: "#5733C4",
        mutedDark: "#2E2745",
        mutedLight: "#EEEBF7",
      });
  }
};

export default colorPalleteReducer;
