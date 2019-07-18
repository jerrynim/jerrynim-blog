import React, { LegacyRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import Comments from "../Comments";
import Navigator from "../Navigator";
import parse, { domToReact } from "html-react-parser";
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

const PostHeader = styled.div<{ image: string }>`
  position: relative;
  height: 350px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const Overlay = styled.div`
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const PostTitle = styled.h1`
  z-index: 5;
  position: absolute;
  font-size: 36px;
  color: white;
  left: 40px;
  bottom: 79px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.9;
`;
const PostSubTitle = styled.h2`
  z-index: 5;
  left: 40px;
  bottom: 39px;
  position: absolute;
  opacity: 0.9;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Post = styled.div`
  margin: 18px 40px;
`;

const NavigatorPosition = styled.div`
  position: fixed;
  margin-top: 50px;
  margin-left: 500px;
  position: fixed;
`;
interface IProps {
  data: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
    Post: {
      Content: string;
      Comments: {
        id: string;
        nickname: string;
        text: string;
        createdAt: string;
      }[];
    };
  };
}

const FullArticlePresenter: React.FC<IProps> = ({ data }) => {
  let refs: any = [];
  let refsYPositon: Array<number> = [];

  const scrollToTitle = (title: string) => {
    const target = refs.find((ref: any) => ref!.current.id === title);
    target.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return (
    <>
      <Container>
        <NavigatorPosition>
          <Navigator
            refs={refs}
            refsYPositon={refsYPositon}
            scrollToTitle={scrollToTitle}
            content={data.Post.Content}
          />
        </NavigatorPosition>
        <Background>
          <PostHeader image={data.image}>
            <PostTitle>{data.title}</PostTitle>
            <PostSubTitle>{data.subTitle}</PostSubTitle>
            <Overlay />
          </PostHeader>
          <Post>
            {parse(data.Post.Content, {
              replace: ({ attribs, children }) => {
                if (attribs && attribs.class === "title" && children) {
                  const ref2: LegacyRef<HTMLHeadingElement> = React.createRef();
                  refs.push(ref2);
                  const title = children[0].data;
                  return (
                    <h1 ref={ref2} className={"title"} id={title}>
                      {domToReact(children)}
                    </h1>
                  );
                }
              }
            })}
          </Post>
          <Comments data={data.Post.Comments} />
        </Background>
      </Container>
    </>
  );
};
export default FullArticlePresenter;
