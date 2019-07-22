import React from "react";
import { UseInput } from "../../Hooks/useInput";
import styled from "../../style/typed-components";

const Container = styled.div`
  width: 758px;
  height: -webkit-fill-available;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  content: UseInput;
  file: string;
}

const PostPreviewPresenter: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  content,
  file
}) => {
  return (
    <Container>
      {file}
      {title.value}
      {subTitle.value}
      {tags.value}
      {password.value}
      {content.value}
    </Container>
  );
};
export default PostPreviewPresenter;
