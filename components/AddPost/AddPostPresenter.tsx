import React from "react";
import styled from "styled-components";
import PostInfo from "../PostInfo";
import PostInput from "../PostInput";
import { UseInput } from "../../Hooks/useInput";
import PostPreview from "../PostPreview";

const Container = styled.div`
  padding-top: 96px;
  width: 100%;
  height: -webkit-fill-available;
  background-color: ${(props) => props.theme.blueGray};
  display: flex;
  justify-content: center;
  position: relative;
`;

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  content: UseInput;
}

const AddCommentAddPost: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  content
}) => {
  return (
    <Container>
      <PostInfo
        title={title}
        subTitle={subTitle}
        tags={tags}
        password={password}
      />
      <PostPreview
        title={title}
        subTitle={subTitle}
        tags={tags}
        password={password}
        content={content}
      />
      <PostInput content={content} />
    </Container>
  );
};

export default AddCommentAddPost;
