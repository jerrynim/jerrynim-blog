import React, { Dispatch } from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("../static/nes1.jpg");
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Articles = styled.div`
  margin-right: 100px;
`;
const Scrolldowns = styled.div`
  position: absolute;
  right: 0;
  bottom: 15px;
  left: 0;
  margin: auto;

  width: 34px;
  height: 55px;
`;

const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid black;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;
const scroll = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
`;
const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: black;
  animation-name: ${scroll};
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
`;

const RightContent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: -webkit-right;
`;

interface IProps {
  text: string;
  dispatch: Dispatch<any>;
}

const TechPresenter: React.FC<IProps> = ({ text, dispatch }) => {
  return (
    <div style={{ height: "100%" }}>
      <Background />
      <Container>
        <Wrapper>
          <Articles>
            <h1>TECH</h1>

            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px", width: "fit-content" }}
            >
              <h2 className={"title"}>Language</h2>
              <button
                className="nes-btn is-warning"
                onClick={() => dispatch({ type: "JAVASCRIPT" })}
              >
                Javascript
              </button>
              <button
                className="nes-btn is-primary"
                style={{ marginLeft: "20px" }}
                onClick={() => dispatch({ type: "TYPESCRIPT" })}
              >
                Typescript
              </button>
            </section>
            <section
              className={"nes-container with-title"}
              style={{
                marginBottom: "30px",
                width: "650px"
              }}
            >
              <h2 className={"title"}>Front</h2>
              <div style={{ marginBottom: "20px" }}>
                <button
                  className="nes-btn is-primary"
                  onClick={() => dispatch({ type: "REACT" })}
                >
                  React
                </button>
                <button
                  className="nes-btn is-primary"
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch({ type: "REACTNATIVE" })}
                >
                  ReactNative
                </button>
                <button
                  className="nes-btn"
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch({ type: "NEXTJS" })}
                >
                  Next.js
                </button>
              </div>
              <div>
                <button
                  className="nes-btn is-success"
                  onClick={() => dispatch({ type: "REDUX" })}
                >
                  Redux
                </button>
                <button
                  className="nes-btn is-error"
                  onClick={() => dispatch({ type: "HTML5" })}
                  style={{ marginLeft: "20px" }}
                >
                  Html5
                </button>
                <button
                  className="nes-btn is-primary"
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch({ type: "CSS" })}
                >
                  css
                </button>
              </div>
            </section>
            <section
              className={"nes-container with-title"}
              style={{ width: "fit-content", maxWidth: "650px" }}
            >
              <h2 className={"title"}>Back</h2>
              <div style={{ marginBottom: "20px" }}>
                <button
                  className={"nes-btn is-success"}
                  onClick={() => dispatch({ type: "NODEJS" })}
                >
                  Node.js
                </button>
                <button
                  className={"nes-btn is-error"}
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch({ type: "GRAPHQL" })}
                >
                  Graphql
                </button>
                <button
                  className={"nes-btn is-primary"}
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch({ type: "EXPRESS" })}
                >
                  Express
                </button>
              </div>

              <button
                className={"nes-btn"}
                onClick={() => dispatch({ type: "PRISMA" })}
              >
                Prisma
              </button>

              <button
                className={"nes-btn"}
                style={{ marginLeft: "20px" }}
                onClick={() => dispatch({ type: "SERVERLESS" })}
              >
                Serveless
              </button>
            </section>
          </Articles>
          <RightContent>
            <div className={"nes-balloon from-right"}>
              <div
                style={{
                  wordBreak: "break-word"
                }}
              >
                {text}
              </div>
            </div>
            <i className={"nes-squirtle"} />
          </RightContent>
        </Wrapper>
        <Scrolldowns>
          <Mousey>
            <Scroller />
          </Mousey>
        </Scrolldowns>
      </Container>
    </div>
  );
};
export default TechPresenter;
