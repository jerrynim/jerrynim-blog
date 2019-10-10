import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";
import { GET_POSTS, GET_NIGHTMODE } from "../queries/index";
import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";
import nightTheme from "../style/nightTheme";
import { ApolloReduxNextPageContext, Post } from "../types/type";

interface IProps {
  posts: Post[];
}

const App: NextPage<IProps> = ({ posts }) => {
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, {
    ssr: true,
    fetchPolicy: "cache-only"
  });
  const nightmode = data && data.nightmode;
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Header />
        <Sidebar />
        <Articles posts={posts} />
      </>
    </ThemeProvider>
  );
};

App.getInitialProps = async (ctx: ApolloReduxNextPageContext) => {
  const { apolloClient } = ctx;
  const { data: posts } = await apolloClient.query<{ getPosts: Post[] }>({
    query: GET_POSTS,
    fetchPolicy: "network-only"
  });
  return { posts: posts.getPosts };
};

export default App;
