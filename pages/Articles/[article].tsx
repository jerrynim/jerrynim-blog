import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GET_POST } from "../../queries/index";
import { Post, ApolloNextPageContext } from "../../types/type";

interface IProps {
  post: Post;
}

const article: NextPage<IProps> = ({ post }) => {
  return (
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
