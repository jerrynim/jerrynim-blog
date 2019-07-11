import React from "react";
import styled from "../../style/typed-components";
import _ from "lodash";
import Link from "next/link";
const Container = styled.div`
  padding-top: 96px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blueGray};
  display: flex;
  justify-content: center;
  position: relative;
`;

const Background = styled.div`
  background-color: white;
  height: 100%;
  width: 758px;
`;

const Post = styled.div`
  padding: 20px 40px;
`;
const Bar = styled.div`
  height: 2px;
  background-color: #eaeaea;
  border-radius: 4px;
  margin-bottom: 18px;
`;
const Image = styled.img`
  width: 100px;
  height: 80px;
  margin-right: 30px;
`;
const LgSpan = styled.span`
  margin-left: 50px;
`;
const GrayBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 18px;
`;
const TechBox = styled.div`
  display: flex;

  flex-direction: column;
`;
const TechBubble = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f1f5fb;
  border-radius: 50%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TechText = styled.div`
  text-align: center;
  font-size: 18px;
`;
const SubTech = styled.h3`
  font-size: 22px;
  color: #68aedf;
  text-align: center;
  margin-bottom: 18px;
`;
const TechImage = styled.img`
  width: 56px;
  height: 56px;
`;
const AboutMePresenter: React.FC = () => {
  return (
    <Container>
      <Background>
        <Post>
          <h1 className="title">Intoduce 🙌</h1>
          <p className="text">
            안녕하세요 Javascript 개발자 Jerrynim 입니다.
            <br />
          </p>
          <Bar />
          <h1 className="title">Tech🚀</h1>
          <h2 className="title">Language🐴</h2>
          <div>
            <Image src="../../static/es8.png" alt="" />
            <Image src="../../static/ts.png" alt="" />
          </div>
          <p className="text" style={{ marginLeft: "15px" }}>
            Javascript <LgSpan>Typescript</LgSpan>
          </p>
          <Bar />
          <h2 className="title">Front 🖥</h2>
          <SubTech>what are usually using</SubTech>
          <GrayBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/react.png" alt="" />
              </TechBubble>
              <TechText>React.js</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/nextjs.png" alt="" />
              </TechBubble>
              <TechText>Next.js</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/styledComponents.png" alt="" />
              </TechBubble>
              <TechText>styled-com</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/apollo.png" alt="" />
              </TechBubble>
              <TechText>Apollo</TechText>
            </TechBox>
          </GrayBox>
          <Bar />
          <h2 className="title">Back 🕹</h2>
          <SubTech>what are usually using</SubTech>
          <GrayBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/nodejs.png" alt="" />
              </TechBubble>
              <TechText>Node.js</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>Express</TechBubble>
              <TechText>Express</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/graphql.png" alt="" />
              </TechBubble>
              <TechText>GraphQL</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/prisma.svg" alt="" />
              </TechBubble>
              <TechText>Prisma</TechText>
            </TechBox>
          </GrayBox>
          <Bar />
          <h2 className="title">Experience 👀</h2>
          <p className="text">
            AWS(CloudFormation, EC2, Lambda, S3) Animated Axios Bcrypt
            Blockchain Chai ChromeExtension Css Expo Git GoogleMaps Gulp Heroku
            Html Jest Jwt Mocha Netlify Nodemailer Now Passport Pubsub
            React-native React-navigation Redux Socket.io SQL Serverless Twillio
            TypeOrm
          </p>
          <Bar />
          <h2 className="title">Tool 🌈</h2>
          <SubTech>what are usually using</SubTech>
          <GrayBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/vsc.png" alt="" />
              </TechBubble>
              <TechText>VSC</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/notion2.png" alt="" />
              </TechBubble>
              <TechText>Notion</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/pigma2.png" alt="" />
              </TechBubble>
              <TechText>Pigma</TechText>
            </TechBox>
            <TechBox>
              <TechBubble>
                <TechImage src="../../static/photoshop.png" alt="" />
              </TechBubble>
              <TechText>PhotoShop</TechText>
            </TechBox>
          </GrayBox>
          <Bar />
          <h2 className="title">Project 🅿️</h2>
          <Link href="/Project">Project =></Link>
        </Post>
      </Background>
    </Container>
  );
};
export default AboutMePresenter;
