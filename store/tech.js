//default state
const initialState = "PRESS ANY BUTTON";

//reducer
const tech = (state = initialState, action) => {
  switch (action.type) {
    case "JAVASCRIPT":
      return "JavaScript";
    case "TYPESCRIPT":
      return "typescript";
    case "REACT":
      return "React";
    case "REACTNATIVE":
      return "REACTNATIVE";
    case "NEXTJS":
      return "Nextjs";
    case "APOLLO":
      return "APOLLO";
    case "EXPO":
      return "EXPO";
    case "STYLED-COMPONENTS":
      return "STYLED-COMPONENTS";
    case "HTML5":
      return "HTML5";
    case "CSS":
      return "css";
    case "NODEJS":
      return "NODEJS";
    case "GRAPHQL":
      return "GRAPHQL";
    case "EXPRESS":
      return "EXPRESS";
    case "AWS":
      return "AWS";
    case "PRISMA":
      return "PRISMA";
    case "TYPEORM":
      return "TYPEORM";
    case "SERVERLESS":
      return "SERVERLESS";
    default:
      return state;
  }
};

export default tech;
