import React from "react";
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
  background-image: url("../static/nes.jpg");
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
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
  margin-left: 100px;
`;

const ExperiencePresenter: React.FC = () => {
  return (
    <div style={{ height: "100%" }}>
      <Background />
      <Container>
        <Wrapper>
          <Articles>
            <h1>Experience</h1>
            <section
              className={"nes-container with-title"}
              style={{
                marginBottom: "30px",
                width: "600px"
              }}
            >
              <h2 className={"title"}>Tools</h2>
              <div className={"nes-badge"} style={{ marginBottom: "20px" }}>
                <span className={"is-error"}>Pigma</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-warning"}>Notion</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-dark"}>Git</span>
              </div>
              <div className={"nes-badge"} style={{ marginBottom: "20px" }}>
                <span className={"is-primary"}>PhotoShop</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-warning"}>Slack</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-primary"}>VSC</span>
              </div>
              <div className={"nes-badge"}>
                <span className={"is-warning"}>Heroku</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-dark"}>AWS</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-success"}>Netlify</span>
              </div>
            </section>
            <section
              className={"nes-container with-title"}
              style={{
                marginBottom: "30px",
                width: "600px"
              }}
            >
              <h2 className={"title"}>Modules</h2>
              <div className={"nes-badge"} style={{ marginBottom: "20px" }}>
                <span className={"is-error"}>Passport</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-warning"}>Gulp</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-dark"}>Jest</span>
              </div>
              <div className={"nes-badge"}>
                <span className={"is-primary"}>NodeMailer</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-error"}>Twillio</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-warning"}>Bcrypt</span>
              </div>
            </section>
            <section
              className={"nes-container with-title"}
              style={{
                marginBottom: "30px",
                width: "600px"
              }}
            >
              <h2 className={"title"}>Knowledge</h2>
              <div className={"nes-badge"} style={{ marginBottom: "20px" }}>
                <span className={"is-error"}>BlockChain</span>
              </div>
              <div className={"nes-badge"} style={{ marginLeft: "20px" }}>
                <span className={"is-primary"}>SQL</span>
              </div>
            </section>
          </Articles>
          <RightContent>
            <h1>ETC</h1>
            <section
              className={"nes-container with-title"}
              style={{
                marginBottom: "30px",
                width: "fit-content",
                padding: "10px 10px 10px 0px"
              }}
            >
              <ul className={"nes-list is-disc"}>
                <li>삼육대학교 2020년 02월 졸업예정</li>
                <li>2018 한이음 멘토링 수료</li>
                <li>2018 데이터 모델링 경진대회</li>
                <li>교내 프로젝트 경진대회 우수상</li>
              </ul>
            </section>
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
export default ExperiencePresenter;
