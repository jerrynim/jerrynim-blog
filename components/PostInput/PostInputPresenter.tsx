import React from "react";
import { UseInput } from "../../Hooks/useInput";
import styled from "../../style/typed-components";

const Container = styled.div`
  width: 300px;
  background-color: white;
  margin-left: 30px;
`;

const TextArea = styled.textarea``;

interface IProps {
  content: UseInput;
}

const PostInputPresenter: React.FC<IProps> = ({ content }) => {
  return (
    <Container>
      <TextArea value={content.value} onChange={content.onChange} />
    </Container>
  );
};
export default PostInputPresenter;
