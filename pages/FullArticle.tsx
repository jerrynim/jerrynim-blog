import React from "react";
import FullArticle from "../components/FullArticle";
import { withRouter } from "next/router";
const App: React.FC = (props) => {
  // @ts-ignore: Unreachable code error
  const { title } = props.router.query;
  return <FullArticle title={title} />;
};
export default withRouter(App);
