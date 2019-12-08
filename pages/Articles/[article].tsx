import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import { GET_POST } from "../../queries/index";
import { Post, ApolloReduxNextPageContext } from "../../types/type";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import Sidebar from "../../components/Sidebar";
import useNightmode from "../../Hooks/useNightmode";

interface IProps {
  post: Post;
  title: string | string[];
}

const article: NextPage<IProps> = ({ post, title }) => {
  const { nightmode } = useNightmode();
  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Head>
          <title>{`Jerrynim | ${title}`}</title>
          <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/atom-one-dark.css" />
        </Head>
        <Sidebar />
        <Header />
        <FullArticle post={post} title={title} />
      </>
    </ThemeProvider>
  );
};

article.getInitialProps = async (ctx: ApolloReduxNextPageContext) => {
  const { apolloClient, query } = ctx;
  const { data: post } = await apolloClient.query<{ getPost: Post }>({
    query: GET_POST,
    variables: { title: decodeURI(query.article as string) },
    fetchPolicy: "network-only"
  });
  return { post: post.getPost, title: query.article };
};

export default article;
