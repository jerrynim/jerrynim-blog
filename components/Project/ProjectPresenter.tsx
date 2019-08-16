import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoIosDesktop,
  IoIosColorPalette
} from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import styled from "../../style/typed-components";

const Container = styled.div`
  padding-top: 56px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.blueGray};
  display: flex;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 880px;
  background-color: white;
  display: flex;
`;
const Left = styled.div`
  width: 440px;
`;
const Right = styled.div`
  border-left: 1px solid #e7e9ec;
  width: 440px;
`;
const Project = styled.div`
  padding: 40px 40px 10px 40px;
`;
const ImageWrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 360px;
  height: 240px;
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

const Period = styled.p`
  margin-top: 18px;
  color: #c4c4c4;
`;

const Links = styled.div`
  margin-top: 18px;
  display: flex;
`;

const Link = styled.a`
  margin-right: 15px;
  :last-child {
    margin: 0;
  }
`;
const Bar = styled.div`
  margin: 10px 0px;
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
  box-shadow: 0.2px 0px 1px #eaeaea;
`;

const ProjectPresenter: React.FC = () => (
  <Container>
    <Content>
      <Left>
        <Project>
          <ImageWrapper>
            <Image src="../../static/blog.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>Jerrynim Blog</Title>
            <Des>
              블로그 글을 쓰면서 기술을 공유하는게 재미있어서 개인블로그를
              만드려고 한다.
              <br />
              가능한 영어로 작성하여 많은 개발자들이 볼수 있도록 하고 벨로그에
              한글로 작성하려고 한다.
              <br />
              Next.js 9, Apollo, Graphql, Prisma 2.0 등 을 사용하려고한다.
            </Des>
            <Period>Period : 2019.07 ~ </Period>
            <Links>
              <Link href="https://jerrynim-blog.jerrynim.now.sh/">
                <IoIosDesktop size={30} color="#68aedf" />
              </Link>
              <Link href="https://github.com/jerrynim/jerrynim-blog">
                <IoLogoGithub size={30} color="gray" />
              </Link>
              <Link href="https://www.notion.so/jerrynim/jerrynim-Blog-9777df9160904df898f3bcfbdc1a64a1">
                <MdEventNote size={30} color="#333333" />
              </Link>
              <Link href="https://www.figma.com/file/ehSagpiTA04PaDEEUVPogREI/Portfolio-ver2?node-id=0%3A1">
                <IoIosColorPalette size={30} color="#E91E63" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />

        <Project>
          <ImageWrapper>
            <Image src="../../static/instagram.png" />
          </ImageWrapper>
          <Texts>
            <Title>Instagram Clone Coding</Title>
            <Des>
              인스타그렘의 UI, 주요 기능들을 구현하였다.
              <br />
              로그인, 이메일인증, 팔로우, 좋아요, 댓글달기, 태그하기, 프로필
              변경, 글쓰기, 피드보기 등..
              <br />
              React, Prisma, Graphql, Serverless 등 을 사용하였다.
            </Des>
            <Period>Period : 2019.05 ~ 06</Period>
            <Links>
              <Link href="https://jerrynim-instagram.netlify.com">
                <IoIosDesktop size={30} color="#68aedf" />
              </Link>
              <Link href="https://github.com/jerrynim/PrismagremClient">
                <IoLogoGithub size={30} color="gray" />
              </Link>
              <Link href="https://www.youtube.com/watch?v=QSw8RFLOHIA">
                <IoLogoYoutube size={30} color="red" />
              </Link>
              <Link href="https://www.notion.so/jerrynim/Prismagram-c7318a832c3c4eef9d7c49420b86c5c4">
                <MdEventNote size={30} color="#333333" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />

        <Project>
          <ImageWrapper>
            <Image src="../../static/uber.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>Uber Clone Coding</Title>
            <Des>
              노마드코더 Uber클론 코딩 강의를 보고 따라하였다.
              <br />
              2019년 초에 한번 따라했는데 기억에 안남아서 다시해보았다.
              <br />
              React, TypeOrm, Googlemaps, pubsub 등을 사용하였다.
            </Des>
            <Period>Period : 2019.02</Period>
            <Links>
              <Link href="https://github.com/jerrynim/nuber-client">
                <IoLogoGithub size={30} color="gray" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
        <Project>
          <ImageWrapper>
            <Image src="../../static/wordpress.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>Wordpress sns ecommerce</Title>
            <Des>
              Wordpress의 plugin들을 이용하여 sns형 쇼핑몰을 제작하였다.
              <br />
              2018 한이음 멘토링 프로젝트의 결과물로 3명의 인원으로 끝마쳤다.
            </Des>
            <Period>Period : 2018.03~2018.10</Period>
            <Links>
              <Link href="https://github.com/jerrynim/PickAndSell">
                <IoLogoGithub size={30} color="gray" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
      </Left>
      <Right>
        <Project>
          <ImageWrapper>
            <Image src="../../static/Portfolio.png" />
          </ImageWrapper>
          <Texts>
            <Title>Portfolio ver.1</Title>
            <Des>
              Next.js 와 nescss를 이용하여 만들어 보았다.
              <br />
              포트폴리오가 필요하여 간단하게 만들어 보았다.
              <br />
              Next.js, Nescss, Redux 등 을 사용하였다.
            </Des>
            <Period>Period : 2019.07</Period>
            <Links>
              <Link href="https://jerrynim-portfolio.netlify.com/">
                <IoIosDesktop size={30} color="#68aedf" />
              </Link>
              <Link href="https://github.com/jerrynim/jerrynim-portfolio">
                <IoLogoGithub size={30} color="gray" />
              </Link>
              <Link href="https://www.notion.so/jerrynim/Portfolio-9bcbd84131cd487cb42fb0e2fa31896e">
                <MdEventNote size={30} color="#333333" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
        <Project>
          <ImageWrapper>
            <Image src="../../static/zumo.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>ZUMO Clone Coding</Title>
            <Des>
              주말에 뭐하지라는 멋진 앱을 따라 만들어 보고 싶어 시도하였다.
              <br />
              처음 해보는 웹개발이라 공부에 많은 시간을 사용하였다.
              React-Native, Expo, React-navigation,Animated 등을 사용하여 UI를
              따라 만들어 보았다.
            </Des>
            <Period>Period : 2019.03 ~ 2019.04</Period>
            <Links>
              <Link href="https://github.com/jerrynim/zumoC">
                <IoLogoGithub size={30} color="gray" />
              </Link>
              <Link href="https://www.youtube.com/watch?v=exxa2tNblwc">
                <IoLogoYoutube size={30} color="red" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
        <Project>
          <ImageWrapper>
            <Image src="../../static/bitcoin.jpg" />
          </ImageWrapper>
          <Texts>
            <Title>Bitcoin Clone Coding</Title>
            <Des>
              노마드코더 BitCoin 클론 코딩 강의를 보고 따라하였다.
              <br />
              블록체인의 개념을 코딩하면서 이해할수 있었다.
              <br />
              Wecksoecket, React, Electron 등을 사용해 보았다.
            </Des>
            <Period>Period : 2019.01</Period>
            <Links>
              <Link href="https://github.com/jerrynim/bitcoin">
                <IoLogoGithub size={30} color="gray" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
        <Project>
          <ImageWrapper>
            <Image src="../../static/naverEx.png" />
          </ImageWrapper>
          <Texts>
            <Title>Naver SerachWord Extension</Title>
            <Des>
              Naver 인기 검색어를 크롬 확장 팝업앱으로 만들었다.
              <br />
              2명의 인원으로 React 와 chromeExtension 을 사용하여 만들었다.
            </Des>
            <Period>Period : 2018.11</Period>
            <Links>
              <Link href="https://github.com/jerrynim/NaverSearchWordExtension">
                <IoLogoGithub size={30} color="gray" />
              </Link>
            </Links>
          </Texts>
        </Project>
        <Bar />
      </Right>
    </Content>
  </Container>
);

export default ProjectPresenter;
