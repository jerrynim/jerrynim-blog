//default state
const initialState = "Press Any Tag";

//reducer
const project = (state = initialState, action) => {
  switch (action.type) {
    case "PORTFOLIO":
      return "제가 해온것들을 좀 더 보여드리고 싶어서 만들게 되었습니다. 제작하면서 Nextjs와 Redux를 사용하여 간단하게 제작해 보았습니다.";
    case "INSTAGRAM":
      return `인스타 그램의 UI와 기능을 그대로 클론 코딩해 보면서 최신기술을 연습하고 실제 서비스를 따라 만들며 공부했습니다.
      UI/UX를 고려하여 개발을 하는법을 공부하였고
       React Hooks와 Graphql 과 Prisma를 잘다룰수 있게 되었습니다.`;
    case "ZUMO":
      return `주말의 뭐하지라는 UI/UX가 뛰어나다고 생각되는 앱이있어 따라만들어 보면서 공부해보고 싶었습니다. ReactNative를 사용하였고 navigation과 Animated를 공부하고 사용하였습니다.`;
    case "UBER":
      return "노마드 코더라는 인터넷 강의 사이트를 따라서 우버 앱을 따라 만들어 보았습니다.";
    case "BITCOIN":
      return "노마드 코더라는 인터넷 강의 사이트를 따라서 비트코인을 공부하고 따라 만들어 보았습니다.";
    case "NAVER":
      return "네이버 인기 검색어를 React를 이용해 확장앱에 팝업으로 나타내는 확장앱을 만들었습니다. 교내 프로젝트 경진대회에 출전하여 우수상을 받았습니다.";
    case "WORDPRESS":
      return "한이음 프로젝트를 위해 웹을 만들기 위해서 WordPress를 사용하고 php를 공부하여 수정하려 하였고 플러그인 사용과 개발자들의 코드를 보면서 코딩을 익혔습니다.";
    default:
      return state;
  }
};

export default project;
