import React from "react";
import styled from "../../style/typed-components";
import { Tag } from "../../types/type";

const Container = styled.div`
  background-color: ${props => props.theme.background_color};
  transition: 0.2s ease-in-out;
  width: 100%;
  padding-top: 20px;
  background-color: ${props => props.theme.white_gray};

  .conent {
    width: 928px;
    margin: auto;
    padding-top: 20px;
    background-color: ${props => props.theme.white_gray};
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 2px solid ${props => props.theme.light_gray};
    & h1 {
      color: ${props => props.theme.black_white};
      font-size: 24px;
    }
  }

  .tag_list {
    margin-top: 26px;
  }
`;
interface IProps {
  tags: Tag[];
}

const TagListPresenter: React.FC<IProps> = ({ tags }) => {
  return (
    <Container>
      <div className="conent">
        <div className="head">
          <h1>Tags</h1>
        </div>
        <div className="tag_list">
          {tags.map(tag => (
            <div>{tag.term}</div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TagListPresenter;
