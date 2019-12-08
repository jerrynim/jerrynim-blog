import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import Link from "next/link";
import { Post } from "../../types/type";
import styled from "../../style/styled-components";

const Container = styled.div`
  display: flex;

  .right_card {
    padding: 20px 0px 0px 16px;
  }
`;

const Card = styled.div`
  padding: 20px 16px 0px 0px;
  border-bottom: 2px solid ${props => props.theme.light_gray};
  position: relative;
  .img_wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 18px;
    img {
      top: 0;
      left: 0;
      width: 100%;
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
    color: ${props => props.theme.link_color};
    white-space: pre;
    margin-bottom: 12px;
  }
`;

const Left = styled.div`
  flex: 1;
  padding-top: 20px;
  margin-left: 16px;

  border-right: 2px solid ${props => props.theme.light_gray};
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
              <Link href={`/articles/${post.title}`} prefetch={false}>
                <a aria-label={`Post-${post.title}-${post.id}`}>
                  <div className="img_wrapper">
                    <img src={post.thumbnail} alt="" />
                  </div>
                </a>
              </Link>
              <h1>
                <Link href={`/articles/${post.title}`} prefetch={false}>
                  <a aria-label={`Post-${post.title}`}>{post.title}</a>
                </Link>
              </h1>
              <h2>{post.subTitle}</h2>
              <div className="bottom">
                <div className="tag_box">
                  {post.tags.map(tag => (
                    <p key={tag.id}>
                      <Link href={`/tag/${tag.term}`} prefetch={false}>
                        <a aria-label={`Tag-${tag.term}`}>{tag.term}</a>
                      </Link>
                    </p>
                  ))}
                </div>
                <p className="date">{formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}</p>
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
              <Link href="/articles/[article]" as={`/articles/${post.title}`} prefetch={false}>
                <a aria-label={`Post-${post.title}`}>
                  <div className="img_wrapper">
                    <img src={post.thumbnail} alt="" />
                  </div>
                </a>
              </Link>
              <h1>
                <Link href="/articles/[article]" as={`/articles/${post.title}`} prefetch={false}>
                  <a aria-label={`Post-${post.title}`}>{post.title}</a>
                </Link>
              </h1>
              <h2>{post.subTitle}</h2>
              <div className="bottom">
                <div className="tag_box">
                  {post.tags.map(tag => (
                    <p key={tag.id}>
                      <Link href="/tag/[tag]" as={`/tag/${tag.term}`} prefetch={false}>
                        <a aria-label={`Tag-${tag.term}`}>{tag.term}</a>
                      </Link>
                    </p>
                  ))}
                </div>
                <p className="date">{formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}</p>
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
