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
  background-image: url("../static/nes.jpg");
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

const ExperiencePresenter: React.FC = () => {
  return (
    <div>
      <Background />
      <Container>
        <h1>Experience</h1>
        <Wrapper>
          <Articles>
            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px", width: "fit-content" }}
            >
              <h2 className={"title"}>AndSoOn</h2>
            </section>
            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px", width: "fit-content" }}
            >
              <h2 className={"title"}>Tools</h2>
            </section>
          </Articles>
          <RightContent>
            <div
              className={"nes-balloon from-right"}
              style={{
                marginRight: "80px",
                width: "100%",
                height: "100%",
                backgroundColor: "black"
              }}
            >
              <div style={{ color: "papayawhip" }}>adsfasd</div>
            </div>
            <i className={"nes-charmander"} />
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
