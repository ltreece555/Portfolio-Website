const colorPalleteReducer = (state, action) => {
  switch (action.payload) {
    case "blue":
      return (state = {
        id: "blue",
        primary: "#412691",
        secondary: "#1F1245",
        accent: "#5733C4",
        mutedDark: "#2E2745",
        mutedLight: "#EEEBF7",
      });
    case "red":
      return (state = {
        id: "red",
        primary: "#AB0F36",
        secondary: "#5E081E",
        accent: "#DE1446",
        mutedDark: "#5E2533",
        mutedLight: "#F7E6EA",
      });
    case "green":
      return (state = {
        id: "green",
        primary: "#00AD5F",
        secondary: "#005E34",
        accent: "#00DE7A",
        mutedDark: "#1C5E41",
        mutedLight: "#E6F7F0",
      });
    default:
      return (state = {
        id: "blue",
        primary: "#412691",
        secondary: "#1F1245",
        accent: "#5733C4",
        mutedDark: "#2E2745",
        mutedLight: "#EEEBF7",
      });
  }
};

export default colorPalleteReducer;
