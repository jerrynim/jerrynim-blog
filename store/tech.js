//default state
const initialState = "PRESS ANY BUTTON";

//reducer
const tech = (state = initialState, action) => {
  switch (action.type) {
    case "JAVASCRIPT":
      return `
        자바스크립트는 주 언어 이며 ES6+를 처음부터 사용해 왔습니다.
        2018년 10월 부터 사용해 왔으며 사용 할수록 더 좋아지는 언어 입니다.
      `;
    case "TYPESCRIPT":
      return `
      타입스크립트는 자바스크립트에 타입을 정의함으로써 개발을 더 실수없이 편하게 개발 할수 있게 해줍니다.
      3개정도의 프로젝트를 타입스크립트와 함께 해보았습니다. 
      처음 사용할때 타입을 모르거나 지원되지 않는 모듈때매 힘들었으나
      VSC와 함께 사용할때 개발이 편해지고 에러를 방지해줘서 가능하면 사용하려고 합니다.
      `;
    case "REACT":
      return `React는 2018년 10월 부터 꾸준히 사용해온 라이브러리 입니다.
      Class형식으로 사용할때부터 지금의 Hooks와 함께 함수형 프로그래밍까지 사용해보았고
      웹 개발을 편하게 해줘서 좋아하는 라이브러리 입니다.`;
    case "REACTNATIVE":
      return `React Native는 React에 익숙하여 사용하게 되었습니다. 사용하면서 웹과 앱의 차이점을 보고 React-native-navigation, Animated등 문서를 읽으면서 공부하고 주말의 뭐하지 라는 앱을 클론코딩하면서 익혀보았습니다.
      `;
    case "NEXTJS":
      return `Nextjs는 서버 사이드 렌더링을 위해 사용하였습니다. 
      이번 포트폴리오도 nextjs를 사용 하였으며 빠른 반응을 제공하기 위해 사용하였습니다.`;
    case "APOLLO":
      return `아폴로 클라이언트는 Graphql을 클라이언트에서 사용하기 위해 편의성을 제공해 주어서 사용하였습니다.`;
    case "REDUX":
      return `저는 ContextAPI 다루는데 익숙하나 애플리케이션이 커지면서 생기는 props의 전달과정에서 불편함을 느끼고 Redux를 공부하였습니다.
        이번 포트폴리오는 작은 크기의 애플리케이션이지만 Redux를 사용해 익혀보았습니다.
      `;
    case "HTML5":
      return `
        Html의 태그들의 기능과 샤용법을 공부하여 웹개발의 기본을 익혔습니다. style-reset을 사용하여서 div 태그를 자주 사용합니다.
      `;
    case "CSS":
      return `
      css는 여러 페이지를 따라 만들어 보면서 연습하였고, styled-components라는 모듈을 사용해서 사용하는 것을 좋아합니다.
      
      `;
    case "NODEJS":
      return "서버를 만들기 위해서 Node.js의 npm을 통해 여려 모듈을 다운로드해서 사용 할 수 있었습니다.";
    case "GRAPHQL":
      return `Graphql은 RestFul API 를 대체할수 있는 모듈로서 직관적인 쿼리와 빠른 속도를 제공합니다.
      대부분의 프로젝트를 Graphql을 사용하였고 REST보다 익숙하게 사용합니다.
      `;
    case "EXPRESS":
      return `
      Express는 RESTFUL API서버를 만들기 위해 사용했으며, 간단하게 서버를 만들때 사용하곤 합니다.
      `;
    case "PRISMA":
      return `
        Pirsma를 서버의 Database 구축을 위해 사용하며 Nosql을 지원하는 모듈이고 Api를 자동으로 만들어주는 등 매우 편리하여 
        개인적인 프로젝트에서 자주 사용하게 될 것 같습니다.
      `;
    case "TYPEORM":
      return `
        TypeOrm은 Nosql을 위한 강력한 모듈입니다. 우버 클론 코딩에서 서버의 데이터 베이스 구축을 위해 사용해보았습니다.
      `;
    case "SERVERLESS":
      return "Serverless 프레임워크를 aws Lambda 에 Graphql Api를 배포하기 위해 사용해 보았습니다.";
    default:
      return state;
  }
};

export default tech;
