import React from "react";
import parse from "html-react-parser";
import Highlight from "react-highlight";
import styled from "../../style/typed-components";

const Container = styled.div`
  width: 758px;
  min-height: 350px;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: relative;
`;

const PostHeader = styled.div`
  position: relative;
  height: 350px;
  width: 100%;

  background-position: center;
  background-size: cover;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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

const Highlighted = styled(Highlight)<{ language: string }>`
  margin: 0px 20px 18px 20px;
`;

const Post = styled.div`
  margin: 18px 40px;
`;

interface IProps {
  title: any;
  subTitle: any;
  tags: any;
  content: any;
  thumbnail: any;
}

const PostPreviewPresenter: React.FC<IProps> = ({ title, subTitle, tags, content, thumbnail }) => (
  <Container>
    <PostHeader>
      <img src={thumbnail.value} alt="" />
      <PostTitle>{title.value}</PostTitle>
      <PostSubTitle>{subTitle.value}</PostSubTitle>
      <Overlay />
    </PostHeader>
    <Post />
    {parse(content.value, {
      replace: domNode => {
        const { attribs, children } = domNode;

        if (attribs && attribs.class === "code" && children) {
          return (
            <Highlighted language="typescript" className="code">
              {children[0].data}
            </Highlighted>
          );
        }
        return domNode;
      }
    })}
    {tags.value}
  </Container>
);

export default PostPreviewPresenter;
