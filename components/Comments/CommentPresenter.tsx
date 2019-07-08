import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px 60px 20px 40px;
  background-color: white;
`;
const Comments = [
  {
    id: "asdfasdf",
    nickname: "jerrynim",
    text: "좋은글 잘 읽었습니다",
    createdAt: "2014-10-10"
  },
  {
    id: "asdfasdf",
    nickname: "jerrynim",
    text: "좋은글 잘 읽었습니다",
    createdAt: "2014-10-10"
  }
];
const CommentsCount = styled.div`
  display: flex;
`;
const Number = styled.div`
  color: #2f80ed;
  margin-left: 5px;
`;
const Bar = styled.div`
  margin: 10px 0px;
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
`;
const CommentsPresenter: React.FC = () => {
  return (
    <Container>
      <CommentsCount>
        댓글
        <Number>{Comments.length}</Number>
      </CommentsCount>
      <Bar />
    </Container>
  );
};
export default CommentsPresenter;
