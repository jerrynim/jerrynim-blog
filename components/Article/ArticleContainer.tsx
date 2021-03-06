import React from "react";
import ArticlePresenter from "./ArticlePresenter";

interface IProps {
  data: any;
}

const ArticleContainer: React.FC<IProps> = ({ data }) => (
  <ArticlePresenter data={data} />
);

export default ArticleContainer;
