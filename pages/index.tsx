import React from "react";
import { NextPage } from "next";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
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
      <button
        type="button"
        onClick={() => {
          cookie.set("nightmode", "on", { expires: 1 });
        }}
      >
        set cookie
      </button>
    </>
  );
};

App.getInitialProps = async (ctx: ApolloNextPageContext) => {
  const { nightmode } = nextCookie(ctx);
  const { apolloClient, pathname } = ctx;
  const { data: posts } = await apolloClient.query<{ getPosts: Post[] }>({
    query: GET_POSTS,
    fetchPolicy: "network-only"
  });

  return { posts: posts.getPosts, pathname };
};

export default App;
