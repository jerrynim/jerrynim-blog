import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import styled from "../../style/typed-components";
import { Comment } from "../../types/type";

const Container = styled.div`
  width: 100%;
  padding: 20px 60px 10px 40px;
  background-color: white;
`;

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
const TextArea = styled(TextareaAutosize)`
  width: 100%;
  min-height: 65px;
  font-size: 16px;
  border-color: rgb(234, 234, 234);
  height: 65px;
  resize: none;
`;
const NickNameBox = styled.div`
  display: flex;
  align-items: center;
`;
const NickName = styled.div`
  font-size: 18px;
  color: #757575;
`;
const NickNameInput = styled.input`
  margin-left: 10px;
  border: 1px solid #eaeaea;
  line-height: 18px;
`;
const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const CommentView = styled.li`
  padding: 25px 0px;
  display: flex;
  border-bottom: 2px solid #eaeaea;
  :last-child {
    border: 0;
  }
`;
const Author = styled.div`
  color: #757575;
  font-size: 18px;
  text-align: center;

  display: flex;
  align-items: center;
  word-break: break-all;
  max-width: 80px;
  min-width: 80px;
`;
const TextBox = styled.div`
  position: relative;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  color: #757575;
`;
const Time = styled.div`
  position: absolute;
  margin-top: 10px;
  color: #c4c4c4;
  bottom: 0;
  margin-bottom: -20px;
  font-size: 13px;
`;

const SubmitArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const SubmitButton = styled.button`
  background-color: #2f80ed;
  color: white;
  border-radius: 40px;
  width: 55px;
  font-size: 16px;
  height: 24px;
`;
interface IProps {
  data: Comment[];
}

const CommentsPresenter: React.FC<IProps> = ({ data: Comments }) => (
  <Container>
    <CommentsCount>
      댓글
      <Number>{Comments.length}</Number>
    </CommentsCount>
    <Bar />
    <TextArea />
    <SubmitArea>
      <NickNameBox>
        <NickName>NickName</NickName>
        <NickNameInput />
      </NickNameBox>
      <SubmitButton>확인</SubmitButton>
    </SubmitArea>
    <Bar />
    <CommentList>
      {Comments.map(comment => (
        <CommentView key={comment.id}>
          <Author>{comment.nickname}</Author>
          <TextBox>
            <Text>{comment.text}</Text>
            <Time>{comment.createdAt}</Time>
          </TextBox>
        </CommentView>
      ))}
    </CommentList>
  </Container>
);

export default CommentsPresenter;
