import React from "react";
import parse, { domToReact } from "html-react-parser";
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
  return (
    <Container number={focus}>
      {parse(content, {
        replace: ({ attribs, children }) => {
          if (attribs && attribs.class === "title" && children) {
            return (
              <h1 role="presentation" onClick={() => scrollToTitle(children[0].data)}>
                {domToReact(children)}
              </h1>
            );
          }
          return <></>;
        }
      })}
    </Container>
  );
};
export default NavigatorPresenter;
