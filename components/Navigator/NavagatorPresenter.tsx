import React from "react";
import styled from "styled-components";
import parse, { domToReact } from "html-react-parser";

const Container = styled.div<{ number: number }>`
  position: fixed;
  top: 200px;
  right: 200px;
  font-size: 14px;
  line-height: 20px;
  color: #757575;

  h1 {
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.blue};
    }
    :nth-child(${(props) => props.number}) {
      color: ${(props) => props.theme.blue};
    }
  }
`;

interface IProps {
  scrollToTitle: (title: string) => void;
  focus: number;
  content: string;
}

const NavigatorPresenter: React.FC<IProps> = ({
  focus,
  scrollToTitle,
  content
}) => {
  return (
    <Container number={focus}>
      {parse(content, {
        replace: ({ attribs, children }) => {
          if (attribs && attribs.class === "title" && children) {
            return (
              <h1 onClick={() => scrollToTitle(children[0].data)}>
                {domToReact(children)}
              </h1>
            );
          } else {
            return <></>;
          }
        }
      })}
    </Container>
  );
};
export default NavigatorPresenter;
