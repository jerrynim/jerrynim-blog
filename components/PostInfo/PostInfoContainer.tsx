import React from "react";
import PostInfoPresenter from "./PostInfoPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  title: UseInput;
  subTitle: UseInput;
  tags: UseInput;
  password: UseInput;
}

const PostInfoContainer: React.FC<IProps> = ({
  title,
  subTitle,
  tags,
  password
}) => {
  return (
    <PostInfoPresenter
      title={title}
      subTitle={subTitle}
      tags={tags}
      password={password}
    />
  );
};
export default PostInfoContainer;
