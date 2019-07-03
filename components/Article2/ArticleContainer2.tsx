import React from "react";
import ArticlePresenter from "./ArticlePresenter2";

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
