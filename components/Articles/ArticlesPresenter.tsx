import React, { Dispatch } from "react";
import styled from "styled-components";
import { FaTrello, FaList } from "react-icons/fa";
import theme from "../../style/theme";
import { Post } from "../../types/type";
import CardList from "./CardList";
import LinearList from "./LinearList";

const Container = styled.div`
  width: 928px;
  background-color: white;
  margin: auto;
  padding-top: 56px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 2px solid ${theme.light_gray};
    & h1 {
      font-size: 24px;
    }

    & div {
      display: flex;

      & svg {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        :first-child {
          margin-right: 12px;
        }
      }
    }
  }
  .wrapper {
    padding: 20px 16px;
  }
`;

interface IProps {
  posts: Post[];
  align: string;
  setAlign: Dispatch<string>;
}

const ArticlesPresenter: React.FC<IProps> = ({ posts, align, setAlign }) => (
  <Container>
    {posts && (
      <div className="wrapper">
        <div className="head">
          <h1>Articles</h1>
          <div className="icons">
            <FaTrello
              onClick={() => setAlign("card")}
              size={24}
              color={align === "card" ? theme.blue : theme.black}
            />
            <FaList
              onClick={() => setAlign("linear")}
              size={24}
              color={align === "linear" ? theme.blue : theme.black}
            />
          </div>
        </div>
        {align === "card" && <CardList posts={posts} />}
        {align === "linear" && <LinearList posts={posts} />}
      </div>
    )}
  </Container>
);

export default ArticlesPresenter;
