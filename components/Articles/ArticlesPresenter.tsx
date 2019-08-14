import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Post } from "../../types/type";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  :nth-child(even) {
    background-color: ${(props) => props.theme.blueGray};
  }
`;

const Texts = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const Title = styled.a`
  font-size: 52px;
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.softGray};
  margin: 12px 0px;
`;
const Tags = styled.div`
  display: flex;
`;
const Tag = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.blue};
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
`;
const Image = styled.img`
  width: 600px;
  height: 390px;
  cursor: pointer;
`;

interface IProps {
  posts: Post[];
}

const ArticlePresenter: React.FC<IProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: any) => (
        <Container key={post.id}>
          <Texts>
            <Link href={`/articles/${post.title}`}>
              <Title>{post.title}</Title>
            </Link>
            <SubTitle>{post.subTitle}</SubTitle>
            <Tags>
              {post.tags.map((tag: any) => (
                <Tag key={tag.id}>{tag.term}</Tag>
              ))}
            </Tags>
          </Texts>
          <Link as={`/articles/${post.title}`} href={`/articles/${post.title}`}>
            <a>
              <Image src={post.thumbnail} alt="" />
            </a>
          </Link>
        </Container>
      ))}
    </div>
  );
};
export default ArticlePresenter;
