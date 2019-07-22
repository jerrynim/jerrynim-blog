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
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
}

const AddCommentAddPost: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  content,
  file,
  setFile
}) => {
  return (
    <Container>
      <PostInfo
        title={title}
        subTitle={subTitle}
        tags={tags}
        password={password}
        setFile={setFile}
      />
      <PostPreview
        title={title}
        subTitle={subTitle}
        tags={tags}
        password={password}
        content={content}
        file={file}
      />
      <PostInput content={content} />
    </Container>
  );
};

export default AddCommentAddPost;
