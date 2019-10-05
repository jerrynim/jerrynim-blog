import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import { GET_POST, GET_NIGHTMODE } from "../../queries/index";
import { Post, ApolloReduxNextPageContext } from "../../types/type";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import { ThemeProvider } from "../../style/typed-components";

interface IProps {
  post: Post;
  title: string | string[];
}

const article: NextPage<IProps> = ({ post, title }) => {
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, { fetchPolicy: "cache-only" });

  return (
    <ThemeProvider theme={nightmode ? nightTheme : theme}>
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://highlightjs.org/static/demo/styles/atom-one-dark.css"
          />
        </Head>
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
    variables: { title: query.article },
    fetchPolicy: "network-only"
  });
  return { post: post.getPost, title: query.article };
};

export default article;
