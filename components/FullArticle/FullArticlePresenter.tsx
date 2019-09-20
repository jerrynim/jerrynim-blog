import React, { LegacyRef } from "react";
import styled from "styled-components";
import Highlight from "react-highlight";
import parse, { domToReact } from "html-react-parser";
import Comments from "../Comments";
import Navigator from "../Navigator";
import { Post } from "../../types/type";

const Container = styled.div`
  padding-top: 96px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.blue_gray};
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
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  h1 {
    z-index: 5;
    position: absolute;
    font-size: 36px;
    color: white;
    left: 40px;
    bottom: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: 0.9;
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

const PostView = styled.div`
  margin: 18px 40px;
`;

const NavigatorPosition = styled.div`
  position: fixed;
  margin-top: 50px;
  margin-left: 500px;
  position: fixed;
`;

const Highlighted = styled(Highlight)<{ language: string }>`
  margin: 0px 20px 18px 20px;
`;

interface IProps {
  post: Post;
}

const FullArticlePresenter: React.FC<IProps> = ({ post }) => {
  const refs = [];
  const refsYPositon: number[] = [];

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
            content={post.content}
          />
        </NavigatorPosition>
        <Background>
          <PostHeader image={post.thumbnail}>
            <h1>{post.title}</h1>
            <Overlay />
          </PostHeader>
          <PostView>
            <p className="text">{post.subTitle}</p>

            {parse(post.content, {
              replace: domNode => {
                const { attribs, children } = domNode;
                if (attribs && attribs.class === "title" && children) {
                  const ref2: LegacyRef<HTMLHeadingElement> = React.createRef();
                  refs.push(ref2);
                  const title = children[0].data;
                  return (
                    <h1 ref={ref2} className="title" id={title}>
                      {domToReact(children)}
                    </h1>
                  );
                }
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
          </PostView>
          <Comments comments={post.comments} />
        </Background>
      </Container>
    </>
  );
};
export default FullArticlePresenter;
