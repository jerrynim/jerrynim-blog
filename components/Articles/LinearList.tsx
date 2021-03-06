import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import Link from "next/link";
import styled from "styled-components";
import { Post } from "../../types/type";
import theme from "../../style/theme";

const Container = styled.div`
  width: 696px;
  padding-top: 60px;
  margin: auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const LinearCard = styled.div`
  border-bottom: 2px solid ${theme.light_gray};
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;

  :first-child {
    padding-top: 0;
  }
  .image_wrapper {
    position: relative;
    padding-top: 100%;
    width: 208px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .text_box {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-left: 30px;

    h1 {
      color: ${props => props.theme.black_white};
      font-size: 24px;
      font-weight: 28px;
      margin-bottom: 16px;
    }
    h2 {
      color: ${props => props.theme.black_lightgray};
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 12px;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tag_box {
      display: flex;
      flex-wrap: wrap;
      p {
        font-size: 14px;
        line-height: 16px;
        padding: 4px 6px;
        margin-right: 12px;
        background-color: ${props => props.theme.bluegray_darkblue};
        color: ${props => props.theme.black_white};
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
        margin-bottom: 12px;
        margin-right: 12px;

        a {
          color: ${props => props.theme.black_white};
        }

        :last-child {
          margin-right: 0;
        }
      }
    }
    .date {
      color: ${theme.blue};
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

interface IProps {
  posts: Post[];
}

const LinearList: React.FC<IProps> = ({ posts }) => (
  <Container>
    {posts.map(post => (
      <LinearCard key={post.id}>
        <Link href="/articles/[article]" as={`/articles/${post.title}`} prefetch={false}>
          <a>
            <div className="image_wrapper">
              <img src={post.thumbnail} alt="" />
            </div>
          </a>
        </Link>
        <div className="text_box">
          <Link href="/articles/[article]" as={`/articles/${post.title}`} prefetch={false}>
            <a>
              <h1>{post.title}</h1>
            </a>
          </Link>
          <h2>{post.subTitle}</h2>
          <div className="tag_box">
            {post.tags.map(tag => (
              <p key={tag.id}>
                <Link href="/tag/[tag]" as={`/tag/${tag.term}`} prefetch={false}>
                  <a>{tag.term}</a>
                </Link>
              </p>
            ))}
          </div>
          <p className="date">{formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}</p>
        </div>
      </LinearCard>
    ))}
  </Container>
);

export default LinearList;
