import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { AlphabetTuple } from "../../types/type";
import size from "../../style/size";

const Container = styled.div`
  background-color: ${props => props.theme.background_color};
  transition: 0.2s ease-in-out;
  width: 100%;
  height: -webkit-fill-available;
  padding-top: 57px;

  .conent {
    width: 928px;
    height: inherit;
    margin: auto;
    padding: 0px 16px;
    background-color: ${props => props.theme.white_gray};
    @media (max-width: ${size.tablet}) {
      width: 100%;
    }
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
      margin-top: 18px;
      font-size: 24px;
    }
  }

  .alphabet_nav {
    height: 35px;
    width: calc(100% - 32px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    border: 1px solid ${props => props.theme.black_white};
    margin: 18px 16px 20px;
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
    height: 650px;
    h1 {
      width: fit-content;
      font-size: 24px;
      line-height: 28px;
      color: ${props => props.theme.black_white};
      padding-bottom: 5px;
      border-bottom: 2px solid ${props => props.theme.black_white};
    }
    flex-wrap: wrap;
  }
  .tag_list {
    margin-left: 16px;
    position: relative;
    overflow: scroll;
  }
  .alphabet-items {
    height: 100%;
    width: 100%;
    overflow-y: scroll;

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
  alphabetList: AlphabetTuple[];
}

const TagListPresenter: React.FC<IProps> = ({ alphabetList }) => {
  return (
    <Container>
      <div className="conent">
        <div className="head">
          <h1>Tags</h1>
        </div>
        <div className="alphabet_nav">
          {alphabetList.map(alphabetPair => (
            <div
              role="button"
              key={alphabetPair[0]}
              onClick={() =>
                document.getElementById(`tag_${alphabetPair[0]}`).scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }
            >
              {alphabetPair[0]}
            </div>
          ))}
        </div>
        <div className="tag_list">
          <div className="scrollbar">
            {alphabetList.map(alpahbetPair => (
              <div className="alphabet" key={alpahbetPair[0]} id={`tag_${alpahbetPair[0]}`}>
                <h1>{alpahbetPair[0]}</h1>
                <div className="alphabet-items">
                  {alpahbetPair[1].map(tag => (
                    <Link href="/tag/[tag]" as={`/tag/${tag}`} key={tag}>
                      <a>
                        <p>{tag}</p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TagListPresenter;
