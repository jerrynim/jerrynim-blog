import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GET_POST, GET_NIGHTMODE } from "../../queries/index";
import { Post, ApolloNextPageContext } from "../../types/type";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import { ThemeProvider } from "../../style/typed-components";

interface IProps {
  post: Post;
}

const article: NextPage<IProps> = ({ post }) => {
  const {
    data: { nightmode }
  } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE);
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
        <FullArticle post={post} />
        <Footer />
      </>
    </ThemeProvider>
  );
};

article.getInitialProps = async (ctx: ApolloNextPageContext) => {
  const { apolloClient, query } = ctx;
  const { data: post } = await apolloClient.query<{ getPost: Post }>({
    query: GET_POST,
    variables: { title: query.article },
    fetchPolicy: "network-only"
  });

  return { post: post.getPost };
};

export default article;
