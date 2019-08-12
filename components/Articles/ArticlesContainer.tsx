import React from "react";
import { Tag, Post } from "../../types/type";
import ArticlesPresenter from "./ArticlesPresenter";

interface IProps {
  posts: Post[];
}

const ArticleContainer: React.FC<IProps> = ({ posts }) => {
  return <ArticlesPresenter posts={posts} />;
};

export default ArticleContainer;
