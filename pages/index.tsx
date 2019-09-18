import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";
import { GET_POSTS } from "../queries/index";
import { Post } from "../../jerrynim-blog-server/types/graph.d";
import { ApolloNextPageContext } from "../types/type";

interface IProps {
  pathname: string;
  posts: Post[];
}

const App: NextPage<IProps> = ({ pathname, posts }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Articles posts={posts} />
    </>
  );
};

App.getInitialProps = async (ctx: ApolloNextPageContext) => {
  const { apolloClient, pathname } = ctx;
  const { data: posts } = await apolloClient.query<{ getPosts: Post[] }>({
    query: GET_POSTS,
    fetchPolicy: "network-only"
  });

  return { posts: posts.getPosts, pathname };
};

export default App;
