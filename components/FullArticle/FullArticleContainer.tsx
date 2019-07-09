import React from "react";
import FullArticlePresenter from "./FullArticlePresenter";

interface IProps {
  data: {
    image: string;
    title: string;
    subTitle: string;
    tags: string[];
    Post: {
      Content: string;
      Comments: {
        id: string;
        nickname: string;
        text: string;
        createdAt: string;
      }[];
    };
  };
}

const FullArticleContainer: React.FC<IProps> = ({ data }) => {
  return <FullArticlePresenter data={data} />;
};
export default FullArticleContainer;
