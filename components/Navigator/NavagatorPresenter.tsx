import React from "react";
import styled from "../../style/typed-components";

const Container = styled.div<{ focus: number }>`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.text_color};

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
  console.log(titles, focus);
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
