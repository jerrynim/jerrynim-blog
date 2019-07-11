import React from "react";
import styled from "../../style/typed-components";
import Link from "next/link";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";
const Container = styled.div`
  padding-top: 56px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blueGray};
  display: flex;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 880px;
  height: 800vh;
  background-color: white;
  display: flex;
`;
const Left = styled.div`
  width: 440px;
  height: 500px;
  padding: 40px;
`;
const Right = styled.div`
  border-left: 1px solid #e7e9ec;
  width: 440px;
  height: 600px;
  padding: 40px;
`;
const ImageWrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 360px;
  height: 280px;
`;
const Texts = styled.div`
  margin-top: 18px;
`;
const Title = styled.h1`
  font-size: 26px;
`;
const Des = styled.p`
  margin-top: 18px;
  color: #757575;
`;

const Links = styled.div`
  display: flex;
`;
const ProjectPresenter: React.FC = () => {
  return (
    <Container>
      <Content>
        <Left>
          <ImageWrapper>
            <Image src="https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/39fccae0-8053-11e9-b954-89b6e830b3a7-illu6.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>Instagram Clone Coding</Title>
            <Des>
              인스타그렘의 UI, 주요 기능들을 구현하였다. <br />
              로그인, 이메일인증, 팔로우, 좋아요, 댓글달기, 태그하기, 프로필
              변경, 글쓰기, 피드보기 등.. <br />
              React, Prisma, Graphql 을 사용하였다.
            </Des>
            <Links>
              <Link href="">
                <IoLogoGithub size={20} color={"black"} />
                <IoLogoYoutube size={20} color={"black"} />
              </Link>
            </Links>
          </Texts>
        </Left>
        <Right />
      </Content>
    </Container>
  );
};
export default ProjectPresenter;
