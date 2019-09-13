import * as React from "react";
import styled from "styled-components";
import { Post } from "../../types/type";
import theme from "../../style/theme";

const Container = styled.div`
  display: flex;

  .right_card {
    padding: 20px 0px 12px 16px;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 20px 16px 12px 0px;
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
  }

  h2 {
    color: ${theme.thin_gray};
    margin-bottom: 12px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tag_box {
    display: flex;
    p {
      font-size: 14px;
      line-height: 20px;
      padding: 4px 6px;
      background-color: ${theme.blue_gray};
      margin-right: 12px;

      :last-child {
        margin: 0;
      }
    }
  }
  .date {
    color: ${theme.blue};
  }
`;

const Left = styled.div`
  flex: 1;
  padding-top: 20px;
  margin-left: 16px;

  border-right: 2px solid ${theme.light_gray};
`;
const Right = styled.div`
  padding-top: 20px;
  margin-right: 16px;

  flex: 1;
`;

interface IProps {
  posts: Post[];
}

const CardList: React.FC<IProps> = ({ posts }) => (
  <Container>
    <Left>
      {posts.map((post, index) => {
        if (index % 2 === 0) {
          return (
            <Card key={post.id}>
              <div className="img_wrapper">
                <img src={post.thumbnail} alt="" />
              </div>
              <h1>{post.title}</h1>
              <h2>{post.subTitle}</h2>
              <div className="bottom">
                <div className="tag_box">
                  {post.tags.map(tag => (
                    <p key={tag.id}>{tag.term}</p>
                  ))}
                </div>
                <p className="date">{post.createdAt}</p>
              </div>
            </Card>
          );
        }
        return null;
      })}
    </Left>
    <Right>
      {posts.map((post, index) => {
        if (index % 2 !== 0) {
          return (
            <Card className="right_card" key={post.id}>
              <div className="img_wrapper">
                <img src={post.thumbnail} alt="" />
              </div>
              <h1>{post.title}</h1>
              <h2>{post.subTitle}</h2>
              <div className="bottom">
                <div className="tag_box">
                  {post.tags.map(tag => (
                    <p key={tag.id}>{tag.term}</p>
                  ))}
                </div>
                <p className="date">{post.createdAt}</p>
              </div>
            </Card>
          );
        }
        return null;
      })}
    </Right>
  </Container>
);

export default CardList;
