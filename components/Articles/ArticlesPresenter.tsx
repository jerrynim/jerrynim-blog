import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTrello, FaList } from "react-icons/fa";
import { Post } from "../../types/type";
import CardList from "./CardList";

const Container = styled.div`
  width: 936px;
  background-color: white;
  margin: auto;
  padding-top: 56px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px 16px;
  padding: 20px 0px 8px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  & h1 {
    font-size: 24px;
    color: ${props => props.theme.black};
  }

  & div {
    display: flex;

    & svg {
      :first-child {
        margin-right: 12px;
      }
    }
  }
`;

interface IProps {
  posts: Post[];
}

const ArticlePresenter: React.FC<IProps> = ({ posts }) => (
  <Container>
    <Title>
      <h1>Articles</h1>
      <div>
        <FaTrello size={24} color="#141414" />
        <FaList size={24} color="#141414" />
      </div>
    </Title>
    <CardList posts={posts} />
  </Container>
);

export default ArticlePresenter;
