import React from "react";
import CommentsPresenter from "./CommentsPresenter";

interface IProps {
  data: {
    id: string;
    nickname: string;
    text: string;
    createdAt: string;
  }[];
}

const CommentsContainer: React.FC<IProps> = ({ data }) => {
  return <CommentsPresenter data={data} />;
};
export default CommentsContainer;
