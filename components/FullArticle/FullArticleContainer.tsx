import React from "react";
import FullArticlePresenter from "./FullArticlePresenter";
import { Post } from "../../types/type";

interface IProps {
  post: {
    getPost: Post;
  };
}

const FullArticleContainer: React.FC<IProps> = ({ post }) => (
  <FullArticlePresenter post={post.getPost} />
);

export default FullArticleContainer;
