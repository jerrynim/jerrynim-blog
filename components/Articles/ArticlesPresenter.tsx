import React, { Dispatch } from "react";
import { FaTrello, FaList } from "react-icons/fa";
import theme from "../../style/theme";
import { Post } from "../../types/type";
import CardList from "./CardList";
import LinearList from "./LinearList";
import styled from "../../style/typed-components";

const Body = styled.div`
  background-color: ${props => props.theme.background_color};
  transition: 0.2s ease-in-out;
  width: 100%;
`;
const Container = styled.div`
  width: 928px;
  margin: auto;
  padding-top: 56px;
  background-color: ${props => props.theme.white_gray};
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 2px solid ${theme.light_gray};
    & h1 {
      color: ${props => props.theme.black_white};
      font-size: 24px;
    }

    & div {
      display: flex;

      & svg {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        color: ${props => props.theme.black_white};
        :first-child {
          margin-right: 12px;
        }
        :hover {
          fill: ${props => props.theme.blue};
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
  <Body>
    <Container>
      {posts && (
        <div className="wrapper">
          <div className="head">
            <h1>Articles</h1>
            <div className="icons">
              <FaTrello
                onClick={() => setAlign("card")}
                size={24}
                color={align === "card" ? theme.blue : null}
              />
              <FaList
                onClick={() => setAlign("linear")}
                size={24}
                color={align === "linear" ? theme.blue : null}
              />
            </div>
          </div>
          {align === "card" && <CardList posts={posts} />}
          {align === "linear" && <LinearList posts={posts} />}
        </div>
      )}
    </Container>
  </Body>
);

export default ArticlesPresenter;
