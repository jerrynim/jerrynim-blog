import React, { useState } from "react";
import { Post } from "../../types/type";
import ArticlesPresenter from "./ArticlesPresenter";

interface IProps {
  posts: Post[];
}

const ArticleContainer: React.FC<IProps> = ({ posts }) => {
  const [align, setAlign] = useState<string>("card");
  return <ArticlesPresenter posts={posts} align={align} setAlign={setAlign} />;
};

export default ArticleContainer;
