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
    Post: `<h1 class="title">시작하며...</h1> <p class="text">GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

    A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this:</p> 
    <div class="imgbox">
    <img src="https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/39fccae0-8053-11e9-b954-89b6e830b3a7-illu6.jpg"class="image"/></div>
    <h1 class="title">그리고...</h1> <p class="text">GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

    A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this:</p> 
    <div class="imgbox">
    <img src="https://jerrynim-instagram.s3.ap-northeast-2.amazonaws.com/39fccae0-8053-11e9-b954-89b6e830b3a7-illu6.jpg"class="image"/></div>
 `
  });
  return <FullArticlePresenter data={data} />;
};
export default withRouter(FullArticleContainer);
