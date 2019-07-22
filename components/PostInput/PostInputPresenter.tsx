import React from "react";
import { UseInput } from "../../Hooks/useInput";

interface IProps {
  content: UseInput;
}

const PostInputPresenter: React.FC<IProps> = ({ content }) => {
  console.log(content);
  return <div />;
};
export default PostInputPresenter;
