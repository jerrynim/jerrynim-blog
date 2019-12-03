import React from "react";
import styled from "styled-components";
import size from "../../style/size";

const Container = styled.div<{ focus: number }>`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.text_color};
  position: absolute;
  top: 0;
  right: -80px;
  @media (max-width: ${size.tablet}) {
    display: none;
  }

  ul {
    position: fixed;
    font-size: 18px;
    line-height: 21px;
  }
  li {
    :nth-child(${props => props.focus}) {
      color: ${props => props.theme.blue};
      font-size: 21px;
      line-height: 24px;
    }
  }
  h1 {
    cursor: pointer;
    :hover {
      color: ${props => props.theme.blue};
    }
    :nth-child(${props => props.focus}) {
      color: ${props => props.theme.blue};
    }
  }
`;

interface IProps {
  titles: any[];
  focus: number;
}

const NavigatorPresenter: React.FC<IProps> = ({ titles, focus }) => {
  return (
    <>
      {titles.length > 0 && (
        <Container focus={focus}>
          <ul>
            {titles.map(title => (
              <li key={title.offsetTop} onClick={() => title.scrollIntoView()}>
                {title.innerText}
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};
export default NavigatorPresenter;
