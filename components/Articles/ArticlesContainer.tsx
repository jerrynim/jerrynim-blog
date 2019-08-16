import React from "react";
import { Post } from "../../types/type";
import ArticlesPresenter from "./ArticlesPresenter";

interface IProps {
  posts: Post[];
}

const ArticleContainer: React.FC<IProps> = ({ posts }) => (
  <ArticlesPresenter posts={posts} />
);

export default ArticleContainer;
