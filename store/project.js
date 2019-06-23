//default state
const initialState = "Press Any Tag";

//reducer
const project = (state = initialState, action) => {
  switch (action.type) {
    case "PORTFOLIO":
      return "PORTFOLIO";
    case "INSTAGRAM":
      return "INSTAGRAM";
    case "ZUMO":
      return "ZUMO";
    case "UBER":
      return "UBER";
    case "BITCOIN":
      return "BITCOIN";
    case "NAVER":
      return "NAVER";
    case "WORDPRESS":
      return "WORDPRESS";
    default:
      return state;
  }
};

export default project;
