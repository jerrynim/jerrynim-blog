import React from "react";
import PostPreviewPresenter from "./PostPreviewPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
  content: UseInput;
}

const PostPreviewContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password,
  content
}) => {
  return (
    <PostPreviewPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
      content={content}
    />
  );
};
export default PostPreviewContainer;
