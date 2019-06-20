import React from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  padding: 30px 30px 0px 30px;
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
  justify-content: space-between;
`;
const Articles = styled.div``;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 400px;
  margin-right: 30px;
`;
const TechPresenter: React.FC = () => {
  return (
    <div>
      <Background />
      <Container>
        <h1>TECH</h1>
        <Wrapper>
          <Articles>
            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px", width: "fit-content" }}
            >
              <h2 className={"title"}>Language</h2>
              <button className="nes-btn is-warning">Javascript</button>
              <button
                className="nes-btn is-primary"
                style={{ marginLeft: "20px" }}
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
                <button className="nes-btn is-primary">React</button>
                <button
                  className="nes-btn is-primary"
                  style={{ marginLeft: "20px" }}
                >
                  ReactNative
                </button>
                <button className="nes-btn" style={{ marginLeft: "20px" }}>
                  Next.js
                </button>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <button className="nes-btn">Apollo</button>
                <button
                  className="nes-btn is-primary"
                  style={{ marginLeft: "20px" }}
                >
                  Expo
                </button>
                <button
                  className="nes-btn is-success"
                  style={{ marginLeft: "20px" }}
                >
                  styled-components
                </button>
              </div>
              <div>
                <button className="nes-btn is-error">Html5</button>
                <button
                  className="nes-btn is-primary"
                  style={{ marginLeft: "20px" }}
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
                <button className={"nes-btn is-success"}>Node.js</button>
                <button
                  className={"nes-btn is-error"}
                  style={{ marginLeft: "20px" }}
                >
                  Graphql
                </button>
                <button
                  className={"nes-btn is-primary"}
                  style={{ marginLeft: "20px" }}
                >
                  Express
                </button>
                <button className={"nes-btn"} style={{ marginLeft: "20px" }}>
                  AWS
                </button>
              </div>

              <button className={"nes-btn"}>Prisma</button>
              <button
                className={"nes-btn is-primary"}
                style={{ marginLeft: "20px" }}
              >
                TypeOrm
              </button>
              <button className={"nes-btn"} style={{ marginLeft: "20px" }}>
                Serveless
              </button>
            </section>
          </Articles>
          <RightContent>
            <div
              className={"nes-balloon from-right"}
              style={{ marginRight: "80px", width: "100%", height: "100%" }}
            >
              <div> Pick Me!!</div>
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
