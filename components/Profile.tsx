import React from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  padding: 100px 100px 0px 100px;
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

const LinkWrapper = styled.div`
  margin-bottom: 10px;
`;
const OutLink = styled.a`
  margin-left: 10px;
  color: #212529;
`;
const MailSpan = styled.span`
  margin-left: 10px;
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Profile: React.FC = () => {
  return (
    <div>
      <Background />
      <Container>
        <h1>JERRYNIM</h1>
        <Wrapper>
          <Articles>
            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px" }}
            >
              <h2 className={"title"}>Introduce</h2>
              <div>
                안녕하세요.저는 Javascript 개발자 입니다.
                <br />
                최신기술을 좋아하며 기술을 배우고 발전하는 것을 좋아합니다.
                <br />
                웹 개발을 공부한지 1년정도 되었으며 사용자에게 최적의 서비스를
                주는
                <br />
                개발을 하고 싶습니다.
              </div>
            </section>
            <section
              className={"nes-container with-title"}
              style={{ marginBottom: "30px" }}
            >
              <h2 className={"title"}>Position</h2>
              <div>Fronted Developer</div>
            </section>
            <section className={"nes-container with-title"}>
              <h2 className={"title"}>Links</h2>

              <LinkWrapper>
                <i className={"nes-icon github"} />
                <OutLink href="https://github.com/jerrynim">
                  https://github.com/jerrynim
                </OutLink>
              </LinkWrapper>
              <LinkWrapper>
                <i className={"nes-icon youtube"} />
                <OutLink href="https://www.youtube.com/channel/UCWrBP7s_rK1ldBhe-LkYjug?view_as=subscriber">
                  https://www.youtube.com/channel/
                </OutLink>
              </LinkWrapper>
              <LinkWrapper>
                <i className={"nes-icon gmail"} />
                <MailSpan>tjerry3@naver.com</MailSpan>
              </LinkWrapper>
            </section>
          </Articles>
          <RightContent>
            <div
              className={"nes-balloon from-right"}
              style={{ marginRight: "80px" }}
            >
              Pick Me!!
            </div>
            <i className={"nes-octocat animate"} />
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
export default Profile;
