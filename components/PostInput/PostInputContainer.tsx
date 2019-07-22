import React from "react";
import PostInputPresenter from "./PostInputPresenter";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  content: UseInput;
}

const PostInputContainer: React.FC<IProps> = ({ content }) => {
  return <PostInputPresenter content={content} />;
};
export default PostInputContainer;
