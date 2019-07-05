import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Container = styled.div`
  subTitle {
    color: red;
  }
`;
interface IProps {
  data: any;
}

const FullArticlePresenter: React.FC<IProps> = ({ data }) => {
  const html = `${data.Post}`;

  return (
    <Container>
      <div>{ReactHtmlParser(html)}</div>
    </Container>
  );
};
export default FullArticlePresenter;
