import React, { LegacyRef } from "react";
import Highlight from "react-highlight";
import parse, { domToReact } from "html-react-parser";
import Navigator from "../Navigator";
import { Post } from "../../types/type";
import styled from "../../style/typed-components";

const Container = styled.div`
  padding-top: 96px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background_color};
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.text_color};
  .utterances {
    width: calc(100% - 80px);
  }
  .utterances-frame {
    border-top: 2px solid ${props => props.theme.light_gray};
  }

  .title {
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: ${props => props.theme.black_white};
    word-break: break-word;
  }
  .text {
    color: ${props => props.theme.text_color};
    margin-bottom: 18px;
    font-size: 17px;
    line-height: 22px;
    word-break: break-word;
  }

  .imgbox {
    text-align: center;
    margin-bottom: 14px;
  }
  .img {
    width: 430px;
    height: 320px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .line {
    height: 2px;
    background-color: #777777;
    border-radius: 4px;
    margin: 18px 0px;
  }
  .bold {
    color: #2f80ed;
  }
  .code {
    white-space: initial;
  }
`;

const Background = styled.div`
  background-color: ${props => props.theme.white_gray};
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
  commentRef: React.MutableRefObject<any>;
}

const FullArticlePresenter: React.FC<IProps> = ({ post, commentRef }) => {
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
          <div ref={commentRef} className="ut" />
        </Background>
      </Container>
    </>
  );
};
export default FullArticlePresenter;
