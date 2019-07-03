import React from "react";
import ArticlePresenter from "./ArticlePresenter";

const ArticleContainer: React.FC = () => {
  const Posts = {
    image:
      "https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/39fccae0-8053-11e9-b954-89b6e830b3a7-illu6.jpg",
    title: "GraphQL 과 Apollo 사용하기",
    subTitle: "Open Scourcing GraphQL middleware",
    tags: ["#graphql", "#Apollo", "#Middleware"]
  };

  return <ArticlePresenter Posts={Posts} />;
};
export default ArticleContainer;
