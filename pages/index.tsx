import React from "react";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";
import { GET_POSTS } from "../queries/index";
import theme from "../style/theme";
import nightTheme from "../style/nightTheme";
import { ApolloReduxNextPageContext, Post } from "../types/type";
import useNightmode from "../Hooks/useNightmode";

interface IProps {
  posts: Post[];
}

const App: NextPage<IProps> = ({ posts }) => {
  const { nightmode } = useNightmode();
  return (
    <>
      <Head>
        <title>Jerrynim Blog</title>
      </Head>
      <ThemeProvider theme={nightmode ? nightTheme : theme}>
        <>
          <Header />
          <Sidebar />
          <Articles posts={posts} />
        </>
      </ThemeProvider>
    </>
  );
};

App.getInitialProps = async (ctx: ApolloReduxNextPageContext) => {
  const { apolloClient } = ctx;
  //Posts 불러오기
  const { data: posts } = await apolloClient.query<{ getPosts: Post[] }>({
    query: GET_POSTS,
    fetchPolicy: "network-only"
  });
  return { posts: posts.getPosts };
};

export default App;
