import React from "react";
import parse from "html-react-parser";
import Highlight from "react-highlight";
import styled from "../../style/typed-components";
import size from "../../style/size";

const Container = styled.div`
  width: 758px;
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
  .editor {
    width: 500px;
    height: 500px;
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

const Highlighted = styled(Highlight)<{ language: string }>`
  margin: 0px 20px 18px 20px;
`;
interface IProps {
  title: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  subTitle: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  tags: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  content: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    insertImage: (url: string) => void;
  };
  thumbnail: {
    value: string;
    onChange: (url: string) => void;
  };
}

const PostPreviewPresenter: React.FC<IProps> = ({ title, subTitle, tags, content, thumbnail }) => (
  <Container>
    <div className="content">
      <div className="post_head">
        <img src={thumbnail.value} alt="" />
        <h2>{title.value}</h2>
        <div className="overlay" />
      </div>
      <div className="post_article">
        <h2>{subTitle.value}</h2>
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
      </div>
    </div>
  </Container>
);

export default PostPreviewPresenter;
