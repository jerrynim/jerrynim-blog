import React from "react";
import PostPreviewPresenter from "./PostPreviewPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  content: string;
  file: string;
}

const PostPreviewContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  content,
  file
}) => (
  <PostPreviewPresenter
    title={title}
    subTitle={subTitle}
    tags={tags}
    content={content}
    file={file}
  />
);

export default PostPreviewContainer;
