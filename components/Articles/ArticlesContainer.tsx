import React from "react";
import ArticlePresenter from "./ArticlesPresenter";

interface IProps {
  data: any;
}

const ArticleContainer: React.FC<IProps> = ({ data }) => {
  return <ArticlePresenter data={data} />;
};
export default ArticleContainer;
