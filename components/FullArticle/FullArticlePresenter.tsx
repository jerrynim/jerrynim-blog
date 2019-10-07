import React from "react";
import Highlight from "react-highlight";
import parse, { domToReact } from "html-react-parser";
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
  .content {
    background-color: ${props => props.theme.white_gray};
    height: 100%;
    width: 758px;
  }
  .post_head {
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
  }
  .overlay {
    z-index: 4;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }
  .post_article {
    padding: 18px 40px;

    h2 {
      font-size: 18px;
      line-height: 24px;
      color: ${props => props.theme.black_white};
      margin-bottom: 18px;
    }
  }
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
    font-size: 18px;
    line-height: 24px;
    word-break: break-word;
  }

  .imgbox {
    text-align: center;
    margin-bottom: 18px;
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

const Highlighted = styled(Highlight)<{ language: string }>`
  margin: 0px 20px 18px 20px;
`;
interface IProps {
  post: Post;
  Ref: React.MutableRefObject<any>;
}

const FullArticlePresenter: React.FC<IProps> = ({ post, Ref }) => {
  return (
    <>
      <Container>
        <div className="content">
          <div className="post_head">
            <img src={post.thumbnail} alt="" />
            <h1>{post.title}</h1>
            <div className="overlay" />
          </div>
          <div className="post_article">
            <h2>{post.subTitle}</h2>

            {parse(post.content, {
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
          </div>
          <div ref={Ref} id="comment" />
        </div>
      </Container>
    </>
  );
};
export default FullArticlePresenter;
