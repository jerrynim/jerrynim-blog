import React from "react";
import FullArticlePresenter from "./FullArticlePresenter";

interface IProps {
  data: any;
}

const FullArticleContainer: React.FC<IProps> = ({ data }) => {
  return <FullArticlePresenter data={data} />;
};
export default FullArticleContainer;
