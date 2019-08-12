import React from "react";
import CommentsPresenter from "./CommentsPresenter";
import { Comment } from "../../types/type";

interface IProps {
  comments: Comment[];
}

const CommentsContainer: React.FC<IProps> = ({ comments }) => {
  return <CommentsPresenter data={comments} />;
};
export default CommentsContainer;
