import React from "react";
import styled from "../../style/typed-components";
import alphabets from "./alphabets";

const Container = styled.div`
  background-color: ${props => props.theme.background_color};
  transition: 0.2s ease-in-out;
  width: 100%;
  height: -webkit-fill-available;
  padding-top: 76px;
  background-color: ${props => props.theme.white_gray};

  .conent {
    width: 928px;
    height: inherit;
    margin: auto;
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

  .alphabet_nav {
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    border: 1px solid ${props => props.theme.black_white};
    margin-top: 20px;
    margin-bottom: 20px;
    div {
      padding-top: 4px;
      font-size: 24px;
      line-height: 28px;
      color: ${props => props.theme.black_white};
    }
  }
  .scrollbar {
    display: flex;
    flex-wrap: wrap;
    width: max-content;
  }
  .alphabet {
    width: 213px;
    h1 {
      width: fit-content;
      margin-top: 18px;
      font-size: 24px;
      line-height: 28px;
      color: ${props => props.theme.black_white};
      padding-bottom: 5px;
      border-bottom: 2px solid ${props => props.theme.black_white};
    }
    flex-wrap: wrap;
  }
  .tag_list {
    position: relative;
    overflow: scroll;
  }
  .alphabet-items {
    height: 100%;
    width: 100%;
    margin-top: 18px;
    p {
      font-size: 18px;
      line-height: 21px;
      color: ${props => props.theme.black_white};
      margin-bottom: 11px;
    }
  }
`;
interface IProps {
  alphabetList: any;
}

const TagListPresenter: React.FC<IProps> = ({ alphabetList }) => {
  return (
    <Container>
      <div className="conent">
        <div className="head">
          <h1>Tags</h1>
        </div>
        <div className="alphabet_nav">
          {alphabets.map(alphabet => (
            <div
              role="button"
              key={alphabet}
              onClick={() =>
                document.getElementById(`tag_${alphabet}`).scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }
            >
              {alphabet}
            </div>
          ))}
        </div>
        <div className="tag_list">
          <div className="scrollbar">
            {alphabets.map(alphabet => (
              <div className="alphabet" key={alphabet} id={`tag_${alphabet}`}>
                <h1>{alphabet}</h1>
                <div className="alphabet-items" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TagListPresenter;
