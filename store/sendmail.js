//default state
const initialState = {
  nickname: "",
  message: ""
};

//reducer
const sendmail = (state = initialState, action) => {
  switch (action.type) {
    case "INPUTCHANGE":
      return {
        ...state,
        nickname: action.nickname
      };
    case "MESSAGECHANGE":
      return {
        ...state,
        message: action.message
      };
    case "SENDMAIL":
      return {
        nickname: "",
        message: ""
      };
    default:
      return state;
  }
};

export default sendmail;
