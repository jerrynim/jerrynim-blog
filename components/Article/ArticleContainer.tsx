import React from "react";
import ArticlePresenter from "./ArticlePresenter";

interface IProps {
  Post: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
  };
}

const ArticleContainer: React.FC<IProps> = ({ Post }) => {
  return <ArticlePresenter Post={Post} />;
};
export default ArticleContainer;