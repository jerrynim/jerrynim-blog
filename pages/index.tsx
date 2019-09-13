import React from "react";
import { NextPage, NextPageContext } from "next";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Posts from "../data/Posts";
import Sidebar from "../components/Sidebar";
import { GET_POSTS } from "../queries/index";

interface IProps {
  pathname: string;
}

const App: NextPage<IProps> = ({ pathname: path }) => {
  const { data: posts } = useQuery(GET_POSTS);
  return (
    <>
      <Header path={path} />
      <Sidebar />
      <Articles posts={Posts} />
    </>
  );
};

App.getInitialProps = async ({ pathname }: NextPageContext) => {
  return { pathname };
};

export default App;
