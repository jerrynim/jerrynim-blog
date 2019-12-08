import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Tag, ApolloReduxNextPageContext, Post } from "../../types/type";
import { GET_NIGHTMODE, GET_TAG } from "../../queries/index";
import nightTheme from "../../style/nightTheme";
import theme from "../../style/theme";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Articles from "../../components/Articles";

interface IProps {
  posts: Post[];
}

const tag: NextPage<IProps> = ({ posts }) => {
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

tag.getInitialProps = async ({ apolloClient, query }: ApolloReduxNextPageContext) => {
  const { tag } = query;
  console.log(apolloClient);
  const { data } = await apolloClient.query<{ getTag: Tag }>({
    query: GET_TAG,
    variables: {
      term: decodeURI(tag as string)
    },
    fetchPolicy: "network-only"
  });
  const posts = data && data.getTag && data.getTag.posts;

  return { posts };
};
export default tag;
