import React, { useState } from "react";
import FullArticlePresenter from "./FullArticlePresenter";
import { withRouter } from "next/router";

const FullArticleContainer: React.FC = (props) => {
  // @ts-ignore: Unreachable code error
  const { title } = props.router.query;
  const [data, setData] = useState({
    image:
      "https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/39fccae0-8053-11e9-b954-89b6e830b3a7-illu6.jpg",
    title: "GraphQL 과 Apollo 사용하기",
    subTitle: "Open Scourcing GraphQL middleware",
    tags: ["graphql", "Apollo", "Middleware"],
    Post: `<h1>Title</h1> <h2 style="color:red;">안녕하세요</h2>`
  });
  return <FullArticlePresenter data={data} />;
};
export default withRouter(FullArticleContainer);
