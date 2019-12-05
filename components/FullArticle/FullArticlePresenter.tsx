import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import { Post } from "../../types/type";
import size from "../../style/size";

const Navigator = dynamic(() => import("../Navigator"), { ssr: false });
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
    position: relative;
    @media (max-width: ${size.tablet}) {
      width: 100%;
    }
  }
  .post_head {
    position: relative;
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
    h2 {
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
    top: 0;
    background-color: black;
    opacity: 0.3;
  }
  .post_article {
    padding: 18px 40px;
    word-break: break-all;
    h1 {
      font-size: 18px;
      line-height: 24px;
      color: ${props => props.theme.black_white};
      margin-bottom: 18px;
      margin-bottom: 18px;
      font-weight: 500;
      font-size: 28px;
      line-height: 33px;
      color: ${props => props.theme.black_white};
      word-break: break-word;
    }

    p,
    h2 {
      color: ${props => props.theme.text_color};
      margin-bottom: 18px;
      font-size: 18px;
      line-height: 24px;
      word-break: break-word;
    }
    a {
      color: ${props => props.theme.blue};
      margin-bottom: 18px;
      font-size: 18px;
      line-height: 24px;
      word-break: break-word;
    }
  }
  .utterances {
    width: calc(100% - 80px);
  }
  .utterances-frame {
    border-top: 2px solid ${props => props.theme.light_gray};
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 55%;
    margin-bottom: 18px;
    img {
      padding: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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

interface IProps {
  post: Post;
  Ref: React.MutableRefObject<any>;
}

const FullArticlePresenter: React.FC<IProps> = ({ post, Ref }) => {
  return (
    <>
      <Container>
        <div className="content">
          <Navigator />
          <div className="post_head">
            <img src={post.thumbnail} alt="" />
            <h2>{post.title}</h2>
            <div className="overlay" />
          </div>
          <div className="post_article">
            <h2>{post.subTitle}</h2>
            {parse(post.content, {
              replace: domNode => {
                const { attribs, children } = domNode;
                if (attribs && attribs.class === "code" && children) {
                  return <div className="code">{children[0].data}</div>;
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
