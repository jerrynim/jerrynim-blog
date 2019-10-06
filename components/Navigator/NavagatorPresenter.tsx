import React from "react";
import styled from "../../style/typed-components";

const Container = styled.div<{ number: number }>`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.text_color};

  h1 {
    cursor: pointer;
    :hover {
      color: ${props => props.theme.blue};
    }
    :nth-child(${props => props.number}) {
      color: ${props => props.theme.blue};
    }
  }
`;

interface IProps {
  scrollToTitle: (title: string) => void;
  focus: number;
  content: string;
}

const NavigatorPresenter: React.FC<IProps> = ({ focus, scrollToTitle, content }) => {
  return <Container number={focus} />;
};
export default NavigatorPresenter;
