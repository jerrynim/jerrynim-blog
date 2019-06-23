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
  overflow: scroll;
  height: 600px;
  width: 580px;
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    margin-left: 20px;
    width: 20px;
    height: 20px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 400px;
  margin-right: 30px;
`;
const OutLink = styled.a`
  margin-left: 10px;
  color: #212529;
`;
const Tag = styled.span`
  :hover {
    color: #0056b3;
  }
`;

interface IProps {
  project: string;
  dispatch: Dispatch<any>;
}
const ProjectPresenter: React.FC<IProps> = ({ project, dispatch }) => {
  return (
    <div style={{ height: "100%" }}>
      <Background />
      <Container>
        <Wrapper>
          <div>
            <h1>Project</h1>
            <Articles>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>2019.06</h2>
                <div>
                  <Tag onClick={() => dispatch({ type: "PORTFOLIO" })}>
                    # Portfoilo
                  </Tag>
                  <br />
                  <i className={"nes-icon github"} />
                  <OutLink href="https://github.com/jerrynim/jerrynim-portfolio">
                    https://github.com/jerrynim
                  </OutLink>
                </div>
              </section>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>2019.05</h2>
                <Tag onClick={() => dispatch({ type: "INSTAGRAM" })}>
                  # Instagram Clone Coding
                </Tag>
                <br />
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/PrismagremClient">
                  https://github.com/jerrynim
                </OutLink>
              </section>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>2019.04</h2>
                <Tag onClick={() => dispatch({ type: "ZUMO" })}>
                  # ZUMO Clone Coding
                </Tag>
                <br />
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/zumoC">
                  https://github.com/jerrynim
                </OutLink>
              </section>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>2019.03</h2>
                <Tag onClick={() => dispatch({ type: "UBER" })}>
                  # Uber Clone Coding
                </Tag>
                <br />
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/nuber-client">
                  https://github.com/jerrynim
                </OutLink>
              </section>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>2019.02</h2>
                <Tag onClick={() => dispatch({ type: "BITCOIN" })}>
                  # Bitcoin Clone Coding
                </Tag>
                <br />
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/bitcoin-explorer">
                  https://github.com/jerrynim
                </OutLink>
              </section>
              <section
                className={"nes-container with-title"}
                style={{ marginBottom: "30px", width: "fit-content" }}
              >
                <h2 className={"title"}>~2018</h2>
                <Tag onClick={() => dispatch({ type: "NAVER" })}>
                  # Naver 인기검색어 Extension
                </Tag>{" "}
                <br />
                <Tag onClick={() => dispatch({ type: "WORDPRESS" })}>
                  # WordPress SNS Ecommerce
                </Tag>
                <br />
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/NaverSearchWordExtension">
                  https://github.com/jerrynim
                </OutLink>
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim/PickAndSell">
                  https://github.com/jerrynim
                </OutLink>
              </section>
            </Articles>
          </div>
          <RightContent>
            <div
              className={"nes-balloon from-right"}
              style={{
                backgroundColor: "black"
              }}
            >
              <div style={{ color: "papayawhip", wordBreak: "break-word" }}>
                {project}
              </div>
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
export default ProjectPresenter;
