import React from "react";
import moment from "moment";
import Link from "next/link";
import { Post } from "../../types/type";
import theme from "../../style/theme";
import styled from "../../style/typed-components";

const Container = styled.div``;

const Card = styled.div`
  padding: 20px 16px 0px 0px;
  border-bottom: 2px solid ${theme.light_gray};
  position: relative;
  .img_wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 18px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    width: 100%;
    a {
      color: ${props => props.theme.black_white};
    }
  }

  h2 {
    margin-bottom: 12px;
    color: ${props => props.theme.black_lightgray};
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .tag_box {
    display: flex;
    flex-wrap: wrap;
    p {
      border-radius: 5px;
      font-size: 14px;
      line-height: 20px;
      padding: 4px 6px;
      background-color: ${props => props.theme.bluegray_darkblue};
      box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
      margin-bottom: 12px;
      a {
        color: ${props => props.theme.black_white};
      }
      margin-right: 12px;

      :last-child {
        margin-right: 0px;
      }
    }
  }
  .date {
    color: ${theme.blue};
    white-space: pre;
    margin-bottom: 12px;
  }
`;

interface IProps {
  posts: Post[];
}

const MobileCardListPresenter: React.FC<IProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => (
        <Card key={post.id}>
          <Link href={`/articles/${post.title}`}>
            <a>
              <div className="img_wrapper">
                <img src={post.thumbnail} alt="" />
              </div>
            </a>
          </Link>
          <h1>
            <Link href={`/articles/${post.title}`}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <h2>{post.subTitle}</h2>
          <div className="bottom">
            <div className="tag_box">
              {post.tags.map(tag => (
                <p key={tag.id}>
                  <Link href={`/tag/${tag.term}`}>
                    <a>{tag.term}</a>
                  </Link>
                </p>
              ))}
            </div>
            <p className="date">
              {moment(post.createdAt)
                .startOf("day")
                .fromNow()}
            </p>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default MobileCardListPresenter;
